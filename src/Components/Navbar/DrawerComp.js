import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import click from '../Images/u_click.mp3'; // Ensure the path is correct

const DrawerComp = () => {
  const [draw, setDraw] = useState(false);

  const handleClick = (path) => {
    new Audio(click).play();
    setDraw(false);
  };

  return (
    <div>
      <Drawer open={draw} onClose={() => setDraw(false)}>
        <List>
          <ListItemButton onClick={() => handleClick('/')} component={Link} to="/">
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={() => handleClick('/my-quiz')} component={Link} to="/my-quiz">
            <ListItemIcon>
              <ListItemText>My Quiz</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={() => handleClick('/play-quiz')} component={Link} to="/play-quiz">
            <ListItemIcon>
              <ListItemText>Play Quiz</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setDraw(!draw)} aria-label="open drawer">
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
