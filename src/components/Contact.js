import React ,{useState}from 'react';
import { makeStyles, Paper, Typography,Radio,TextField,Button } from '@material-ui/core';
import { ThreeDRotationOutlined } from '@material-ui/icons';
const Contact = ({title,id, gray}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Say hi");
    const handleChange = (e) => {
      setValue(e.target.value)
    }
    return(
        <div className={`${classes.section} ${gray && classes.sectiondark}`}>
            <div className={classes.sectionContent} id={id}>
              <Typography variant="h3">{title}</Typography>
              <Paper class={classes.root}>
                <div className={classes.titleAndChoices}>
                  <Typography variant="h5">Contact me</Typography>
                  <div className={classes.choices}>
                    <span>Say Hello</span>
                    <Radio 
                      value={"Say hi"}
                      checked={value === "Say hi"}
                      color="primary"
                      onChange={handleChange}
                    />
                    <span>Get a Quote</span>
                    <Radio 
                      value={"Get a Quote"}
                      checked={value === "Get a Quote"}
                      color="primary"
                      onChange={handleChange}
                    />
                      
                  </div>
                </div>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField label={"Your name"}/>
                  <TextField label={"Your e-mail"}/>
                  {
                    value === "Get a Quote" ? (
                      <>
                        <TextField label={"Needed Services"}/>
                        <TextField label={"Estimated Budget"}/>
                      </>
                    ): null
                  }
                  <TextField label={"Write a message"}/>
                </form>
                <Button variant="contained">Submit</Button>
              </Paper>
            </div>
            <div className={classes.copy}>
              
              <p>Designed and developed by <b> Alexis Ezequiel Medina</b> </p>  
              <p>Copyright © 2021 </p>

            </div>
        </div>

    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      color: "#063891",
      
    },
    sectiondark:{
        backgroundColor: "#f2f2f2",
        
    },
    sectionContent:{
        maxWidth:"80vw",
        margin: "0 auto",
        
    },
    root:{
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(3),
      margin: theme.spacing(3),
    },
    form:{
      margin: theme.spacing(0, 3, 3, 3),
    },
    titleAndChoices:{
      
    },
    copy:{
      color:"#000",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    
  }))

export default Contact;