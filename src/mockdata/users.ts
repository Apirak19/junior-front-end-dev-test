export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  userImage: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    firstName: "jackie",
    lastName: "Chan",
    email: "jackiechan@gmail.com",
    password: "123456789",
    dateOfBirth: new Date("1990-01-15"),
    userImage:
      "https://cdn.pixabay.com/photo/2020/10/29/03/22/dog-5695090_960_720.png",
  },
  {
    id: 2,
    firstName: "Bruce",
    lastName: "Lee",
    email: "brucelee@gmail.com",
    password: "123456789",
    dateOfBirth: new Date("1980-01-15"),
    userImage:
      "https://cdn.pixabay.com/photo/2023/06/08/04/49/cat-8048688_1280.jpg",
  },
  {
    id: 3,
    firstName: "Tony",
    lastName: "Ja",
    email: "jackiechan@gmail.com",
    password: "123456789",
    dateOfBirth: new Date("1988-01-15"),
    userImage:
      "https://cdn.pixabay.com/photo/2023/05/20/16/35/dog-8006807_1280.jpg",
  },
  {
    id: 4,
    firstName: "Jason",
    lastName: "Statham ",
    email: "jackiechan@gmail.com",
    password: "123456789",
    dateOfBirth: new Date("1981-01-15"),
    userImage:
      "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg",
  },
  {
    id: 5,
    firstName: "John",
    lastName: "Cena",
    email: "jackiechan@gmail.com",
    password: "123456789",
    dateOfBirth: new Date("1990-01-15"),
    userImage:
      "https://cdn.pixabay.com/photo/2023/11/10/09/48/bird-8379051_1280.jpg",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Cena",
    email: "apirakfakin@gmail.com",
    password: "1234",
    dateOfBirth: new Date("1990-01-15"),
    userImage:
      "https://cdn.pixabay.com/photo/2023/11/10/09/48/bird-8379051_1280.jpg",
  },
];
