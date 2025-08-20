import { Button, Divider, IconButton, InputBase } from "@mui/material";
import TerminalIconLogo from "../../assets/icon_terminal_m_logo.svg?react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      width="100%"
      height="100vh"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: "url('/public/background-login-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src="/public/background-login-2.png"
        alt="login"
        style={{
          width: "80%",
          height: "80%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="white"
        borderRadius={4}
        p={8}
        width={492}
        zIndex={1000}
      >
        <TerminalIconLogo />
        <Typography variant="h1" fontSize={32} fontWeight={700} mt={2}>
          OPUS Terminal M
        </Typography>
        <Typography
          variant="body1"
          fontSize={11}
          fontWeight={400}
          color="#818998"
        >
          Multi-purpose Terminal Operating System
        </Typography>
        <Divider sx={{ width: "100%", my: 4 }} />
        <Box display={"flex"} flexDirection={"column"} gap={2} width="100%">
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            width="100%"
            border={1}
            px={2.5}
            py={0.5}
            borderRadius={100}
            borderColor="#CFD8DC"
          >
            <InputBase
              placeholder="ID"
              sx={{ fontSize: 14, fontWeight: 500 }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            width="100%"
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              width="100%"
              border={1}
              px={2.5}
              py={0.5}
              borderRadius={100}
              borderColor="#CFD8DC"
            >
              <InputBase
                placeholder="Password"
                sx={{ fontSize: 14, fontWeight: 500 }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{
                      p: 0,
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOutlined sx={{ fontSize: 16 }} />
                    ) : (
                      <VisibilityOffOutlined sx={{ fontSize: 16 }} />
                    )}
                  </IconButton>
                }
              />
            </Box>
            <Typography
              variant="body1"
              fontSize={10}
              fontWeight={500}
              color="#B0BEC5"
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("forgot password");
              }}
            >
              Forgot Password
            </Typography>
          </Box>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            fullWidth
            sx={{ borderRadius: 100, height: 38 }}
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
