import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../../../Redux/Actions/Actions";
import img from "../../Images/bgimg.jpg";
import { Button } from "@mui/material";
import click from "../../Images/u_click.mp3";
import "./Result.css";

function Result(props) {
  const results = useSelector((state) => state.reducer.answers);
  const mapped = results.map((el) => el.isCorrect);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetQuizHandler = () => {
    new Audio(click).play();
    dispatch(resetQuiz());
    navigate("/");
  };

  return (
    <div className="result-container">
      <div className="congo-img" style={{ backgroundImage: `url(${img})` }}>
        <div className="congo-text">
          <h2>Hii ! {props.name} 👋</h2>
          <h1>
            Your Score is {mapped.filter((el) => el === true).length} out of{" "}
            {mapped.length}
          </h1>
        </div>
        <Button
          variant="contained"
          size="large"
          className="done-button"
          style={{ backgroundColor: "wheat", color: "black", border: "2px solid black", borderRadius: "10px" }}
          onClick={resetQuizHandler}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default Result;
