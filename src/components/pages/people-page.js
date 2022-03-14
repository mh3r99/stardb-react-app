import React, { Component } from "react";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";
import withRouter from "../withRouter/withRouter";

const PeoplePage = ({ router: { navigate, params } }) => {
  return (
    <Row
      left={
        <PersonList
          onItemSelected={(id) => {
            navigate(id);
          }}
        />
      }
      right={<PersonDetails itemId={params.id} />}
    />
  );
};

export default withRouter(PeoplePage);
