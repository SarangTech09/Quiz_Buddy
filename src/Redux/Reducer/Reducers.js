import ACTIONTYPE from "../Actions/ActionType";

const initialState = {
  quiz: [],
  name: "",
  playQuiz: [],
  answers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONTYPE.ADDQUIZ:
      return { ...state, quiz: [...state.quiz, action.payload] };

    case ACTIONTYPE.TOGGLEACTIVE:
      const quizElem = state.quiz.find((el) => el.id === action.payload);
      const filteredArr = state.quiz.filter((el) => el.id !== action.payload);
      return {
        ...state,
        quiz: quizElem
          ? [{ ...quizElem, isActive: !quizElem.isActive }, ...filteredArr]
          : filteredArr,
      };

    case ACTIONTYPE.DELETEQUIZ:
      return {
        ...state,
        quiz: state.quiz.filter((el) => el.id !== action.payload),
      };

    case ACTIONTYPE.GETNAME:
      return {
        ...state,
        name: action.payload,
      };

    case ACTIONTYPE.PLAYQUIZ:
      const selectedQuiz = state.quiz.find((el) => el.id === action.payload);
      return {
        ...state,
        playQuiz: selectedQuiz || [],
        title: selectedQuiz ? selectedQuiz.title : "",
      };

    case ACTIONTYPE.GETANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };

    case ACTIONTYPE.RESET:
      return {
        ...state,
        name: "",
        playQuiz: [],
        answers: [],
      };

    default:
      return state;
  }
};

export default reducer;
