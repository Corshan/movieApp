import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import TVShowCard from "../components/tvShowCard";
import sampleTVshow from "./sampleTVshow";

export default {
  title: "Home Page/TVShowCard",
  component: TVShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVShowCard tvShow = {sampleTVshow}/>
  );
};
Basic.storyName = "Default";

