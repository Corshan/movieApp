import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import Login from "../components/loginForm"
import sample from "./sampleActor";

export default {
  title: "Auth/login",
  component: Login,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <Login></Login>
  );
};
Basic.storyName = "Default";