import { React, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Header({ token, setToken }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/login" && token) {
      navigate("/home");
    } else if (location.pathname === "/" && !token) {
      navigate("/login");
    }
  }, [token, location, navigate]);

  return (
    <>
      <Grid item container xs={12} marginBottom={2}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              UsersApp
            </Typography>
            <Button color="inherit">{token.username}</Button>
            {token.username ? (
              <Button
                color="inherit"
                onClick={() => {
                  setToken("");
                  navigate("/");
                }}
              >
                signout
              </Button>
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
      </Grid>
      <Outlet />
    </>
  );
}
