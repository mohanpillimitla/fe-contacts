import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ login }) => {
  const classes = useStyles();
  // create state variables for each input

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ login_id: username, password: password });
  };

  return (
    
    <Paper alignItems="center" sx={{position:'absolute',top:'100px',left:'35%',width:'500px'}}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="username"
          variant="filled"
          type="username"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
