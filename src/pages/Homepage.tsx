import React, { useEffect, useState } from "react";
import { User, mockUsers } from "../mockdata/users";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const Homepage = () => {
  const [searchUser, setSearchUser] = useState<User[]>([]);
  const [openModalUserId, setOpenModalUserId] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchUser(mockUsers);
  }, []);

  useEffect(() => {
    const hasUser = localStorage.getItem("user");
    if (!hasUser) {
      navigate("/login");
    }
  }, []);
  const handleSearch = (searchValue: string) => {
    const filteredUsers: User[] = mockUsers.filter((user) => {
      const regex = /^[a-zA-Z]+$/;
      return (
        (regex.test(user.firstName) &&
          user.firstName.toLowerCase().includes(searchValue.toLowerCase())) ||
        user.lastName.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setSearchUser(filteredUsers);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="w-full h-screen flex flex-col items-center gap-8 bg-slate-800 py-14 px-8">
        <h1 className="text-6xl font-semibold text-white text-center">
          Welcome, MyUser
        </h1>
        <section className="w-full flex flex-col items-center gap-6">
          <TextField
            id="email-input"
            label="Search by username"
            type="email"
            size="small"
            sx={{
              width: "100%",
              color: "white",
              maxWidth: "400px",
              borderRadius: "20px",
            }}
            variant="filled"
            color="secondary"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <article className="w-full flex flex-wrap justify-center gap-4 text-white">
            {searchUser.map((user) => {
              const age = dayjs().diff(dayjs(user.dateOfBirth), "year");
              return (
                <div key={user.id} className="w-full max-w-[350px]">
                  <div
                    className="flex gap-4 w-full bg-slate-700 py-2 px-3 rounded-md items-center hover:bg-slate-600 cursor-pointer"
                    onClick={() => {
                      setOpenModalUserId(user.id);
                    }}
                  >
                    <img
                      src={user.userImage}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-8 h-8 object-cover rounded-full bg-slate-50"
                    />
                    <p>
                      {user.firstName} {user.lastName} <span>&#40;</span>
                      {age}
                      <span>&#41;</span>
                    </p>
                  </div>
                  <Modal
                    open={openModalUserId === user.id}
                    onClose={() => setOpenModalUserId(null)}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "calc(50% - 146px)",
                        left: "calc(50% - 150px)",
                        width: 300,
                        minWidth: "300px",
                        border: "solid 1px white",
                        borderRadius: "6px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        background: "#1e293b",
                      }}
                    >
                      <div className="w-full flex justify-center py-2 border-b-2 font-semibold">
                        ID: {user.id}
                      </div>
                      <div className="flex justify-center gap-4 py-2">
                        <img
                          src={user.userImage}
                          alt=""
                          className="w-16 h-16 rounded-full bg-slate-50"
                        />
                      </div>
                      <div className="flex items-center border-t-2">
                        <p className="border-r-2 p-2 w-full max-w-[110px]">
                          First name
                        </p>
                        <p className="p-2">{user.firstName}</p>
                      </div>

                      <div className="flex items-center border-t-2">
                        <p className="border-r-2 p-2  w-full max-w-[110px]">
                          Last name
                        </p>
                        <p className="p-2">{user.lastName}</p>
                      </div>

                      <div className="flex items-center border-t-2">
                        <p className="border-r-2 p-2 w-full max-w-[110px]">
                          Date of birth
                        </p>
                        <p className="p-2">{user.dateOfBirth.toDateString()}</p>
                      </div>

                      <div className="flex items-center border-t-2">
                        <p className="border-r-2 p-2 w-full max-w-[110px]">
                          Email
                        </p>
                        <p className="p-2">{user.email}</p>
                      </div>
                    </Box>
                  </Modal>
                </div>
              );
            })}
          </article>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              
            }}
          >
            Logout
          </button>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default Homepage;
