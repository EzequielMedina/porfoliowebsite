import {makeStyles} from "@material-ui/core";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from"./components/Navbar";
import Portafile from "./components/Portafile";

import Skills from "./components/Skills";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <HomePage title="Alexis Ezequiel Medina" id="HomePage"></HomePage>
      <Portafile title="My works"id="PortafilePage" gray={false}></Portafile>
      <Skills title="Skills"id="SkillsPage" gray={true}></Skills>
      <About title="About me" id="AboutPage" gray={false}></About>
      
      <Contact title="Contact me" id="ContactPage" gray={true}></Contact>
      
      
      
      
    </div>
  );
}

const useStyles = makeStyles((theme)=>({
root:{

}
}))
export default App;
