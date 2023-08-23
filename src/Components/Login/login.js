import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

export const Login = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    if (email === "diko@gmail.com" && password === "Diko2526") setLogin(true);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <img
        src={require("../Imgs/Login-Imgs/3390.png")}
        alt="rasm"
        style={{ height: "100%", width: "65%", objectFit: "cover" }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "35%",
          backgroundColor: "#EDEFF3",
        }}
      >
        <Box sx={{ width: "300px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Tizimga xush kelibsiz !
          </Typography>
          <Typography sx={{ fontSize: "small", color: "#8D9BA8", my: 1 }}>
            Tizimga kirish uchun, login va parol orqali autentifikatsiya
            jarayonidan o’ting
          </Typography>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: "4px 4px 15px 0px rgba(34, 60, 80, 0.2)",
              p: 1.5,
              mt: 5,
            }}
          >
            <TextField
              label="Email"
              variant="standard"
              size="small"
              sx={{
                width: "100%",
              }}
              color="warning"
              focused
              valu={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="standard"
              size="small"
              color="warning"
              focused
              sx={{ width: "100%", mt: 2 }}
              valu={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            color="success"
            disabled={email !== "diko@gmail.com" || password !== "Diko2526"}
            onClick={Submit}
            sx={{ backgroundColor: "#535E68", mt: 3, width: "100%", py: 2 }}
          >
            Tizimga kirish
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
