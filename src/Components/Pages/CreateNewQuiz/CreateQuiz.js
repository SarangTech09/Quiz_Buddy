import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import NewQuizForm from "./NewQuizForm";

// Modal for creating a new quiz
const CreateQuiz = () => {
  const [popup, setPopup] = useState(true); 

  const popupfunc = () => {
    setPopup(false);
  };

  return (
    <div style={{marginTop:"100px"}}>
      {popup ? 
        <div className="container">
          <Dialog
            open={true}
            aria-labelledby="responsive-dialog-title"
            PaperProps={{
              sx: { 
                backgroundColor: "bisque", // Change background color to bisque
                padding: "24px",
              }
            }}
          >
            <DialogTitle id="responsive-dialog-title">
              {"Select question Type."}
            </DialogTitle>
            <DialogActions sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Button onClick={popupfunc} variant="contained">
                MCQ (Single Correct)
              </Button>
            </DialogActions>
          </Dialog>
        </div>
       : 
        <NewQuizForm/>
      }
    </div>
  );
};

export default CreateQuiz;
