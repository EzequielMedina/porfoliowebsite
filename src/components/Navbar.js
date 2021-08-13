import React from "react";
import { AppBar, Divider, Drawer, IconButton, List, ListItem, Toolbar, ListItemIcon } from "@material-ui/core";
import logo from "../img/LogoMakr.png";
import { makeStyles } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import WorkIconTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel"
import { useState } from "react";



const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: "HomePage",
      text: "Home",
      icon: <HomeTwoToneIcon fontSize="large" />,
    },
    {
      id: "PortafilePage",
      text: "My Work",
      icon: <WorkIconTwoToneIcon fontSize="large" />,
    },
    {
      id: "SkillsPage",
      text: "Skills",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" />,
    },
    {
      id: "AboutPage",
      text: "about me",
      icon: <InfoTwoToneIcon fontSize="large" />,
    },
    {
      id: "ContactPage",
      text: "Contact",
      icon: <ContactMailTwoToneIcon fontSize="large" />,
    },
  ];
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="Logo" />
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton edge="end" className={classes.menuButton} onClick={()=>setOpen(!open)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClase={()=>setOpen(false)} className={classes.drawer}>
          <IconButton  onClick={()=>setOpen(false)} className={classes.cancelIcon}>
            <CancelIcon fontSize="large"/>            
          </IconButton>
          <Divider></Divider>
          {links.map(({ id, text, icon }, index) => (
              <Link
                className={classes.sidebar}
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <ListItem component="h5">
                  <span>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                  </span>{text}
                </ListItem>
              </Link>
            ))}
      </Drawer>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(to right, #4286f4c0, #373b44b2)",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    diplay: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "3rem",
    objectFit: "contain",
    "&hover": {
      cursor: "pointer",
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#333",
      fontSize: "1rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(2),
      transitionpProperty: "color",
      transitionDuration: "1s",
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#fff",
      borderBotom: "3px solid #fff",
      textDecoration: "underline",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#333",
      position: "absolute",
      top: 0,
      right: 10,
    },
  },
  drawer:{
    opacity:"0.8",
    background: "linear-gradient(to right, #4286f4c0, #373b44b2)",
  },
  sidebar:{
  
    width: "40vw",
    [theme.breakpoints.down("sm")]:{
      width: "60vw",
    },
    "& h5":{
      
      margin:theme.spacing(3, 0, 0, 4),
      fontSize: "1.3rem",
      color: "#333",
      fontWeight: "bold",
      transitionpProperty: "color",
      transitionDuration: "1s",
    },
    "& h5:hover":{
      cursor: "pointer",
      color: "#00f",
      borderBotom: "3px solid #fff",
      textDecoration: "underline",
    },
    
  },
  cancelIcon:{
    color: "red",
    position: "absolute",
    top: 0,
    right: 10,
    
  },
}));

export default Navbar;
