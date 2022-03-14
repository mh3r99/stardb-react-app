import React from "react";
import { StarshipList } from "../sw-components";
import withRouter from "../withRouter/withRouter";

const StarshipsPage = ({ router: { navigate } }) => {
  return (
    <StarshipList
      onItemSelected={(id) => {
        navigate(id);
      }}
    />
  );
};

export default withRouter(StarshipsPage);
