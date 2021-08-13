import { Box, makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";

const StarRating = ({start}) => {
    const classes = useStyles();
    return(
        <div>
            <Box component="fieldset" borderColor="transparent">
                <Rating name="read_only" readOnly value={start} className={classes.star}/>
            </Box>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    star:{
        [theme.breakpoints.down("sm")]:{
            fontSize: "4vw",
        }
      
    }
  }))

export default StarRating