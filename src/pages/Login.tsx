import React, { useEffect, useState } from "react";
import { mockUsers, User } from "../mockdata/users";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const Login = () => {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(inputEmail);
  }, [inputEmail]);

  useEffect(() => {
    const hasUser = localStorage.getItem("user");
    if (hasUser) {
      navigate("/");
    }
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const userExists = mockUsers.find((user) => user.email === inputEmail);
      if (!userExists || userExists.password !== inputPassword) {
        setError("incorrect email or password");
      } else {
        setError("");
        localStorage.setItem("user", JSON.stringify(userExists));
        navigate("/");
      }
      setLoading(false);
    }, 1500);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="w-full h-[100vh] flex flex-col items-center sm:justify-center gap-4 py-4 sm:py-0 bg-slate-800 sm:bg-slate-700 text-white">
        <PersonIcon
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            padding: "4px",
          }}
        />
        <h1 className="w-full text-2xl text-center font-semibold pb-2">
          Login to User Explorer
        </h1>
        <article className="w-full max-w-[450px] flex flex-col gap-4 sm:bg-slate-800 rounded-lg">
          <form
            onSubmit={handleLogin}
            className="w-full flex flex-col items-center gap-1 px-8 sm:pt-8 pb-4 "
          >
            <TextField
              id="email-input"
              label="Email"
              type="email"
              size="small"
              sx={{ width: "100%", color: "white" }}
              onChange={(e) => {
                setInputEmail(e.target.value);
                setError("");
              }}
              variant="filled"
              color="secondary"
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              size="small"
              autoComplete="current-password"
              sx={{ width: "100%", marginTop: "12px" }}
              onChange={(e) => {
                setInputPassword(e.target.value);
                setError("");
              }}
              variant="filled"
              color="secondary"
            />
            <p className="w-full px-1 text-red-600 font-semibold mt-2">
              {error}
            </p>
            <button
              className={`w-full mt-2 p-1 bg-blue-400 text-white text-2xl font-semibold rounded-md hover:bg-blue-300 ${
                loading && "bg-slate-700 hover:bg-slate-700"
              } `}
              disabled={loading}
            >
              {loading ? (
                <>
                  {/* Loging in */}
                  <CircularProgress
                    size={20}
                    thickness={10}
                    sx={{ color: "white" }}
                  />
                </>
              ) : (
                "Login"
              )}
            </button>

            <a
              href="#"
              className="w-full mt-2 text-start font-semibold hover:text-blue-400"
            >
              create new account
            </a>
          </form>
        </article>
      </main>
    </ThemeProvider>
  );
};

export default Login;
