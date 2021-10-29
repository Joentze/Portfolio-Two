import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
export default function ContactMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div class="contact-menu">
      <IconButton aria-controls="simple-menu" size="large" aria-haspopup="true" onClick={handleClick}>
        <CallIcon/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="https://github.com/Joentze"><GitHubIcon/></a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://www.linkedin.com/in/joen-tan-6b57611b9/"><LinkedInIcon/></a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://www.instagram.com/_joen___/"><InstagramIcon/></a></MenuItem>
      </Menu>
    </div>
  );
}
