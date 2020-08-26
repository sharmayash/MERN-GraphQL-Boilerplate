import React from "react";
import { Grid } from "semantic-ui-react";

import Welcome from "./Welcome";
import Welcome2 from "./Welcome2";
import AllBooks from "./AllBooks";
import UsersBooks from "./UsersBooks";
import Footer from "../../layouts/Footer";

const Books = () => {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <Grid>
          <Welcome />
          <Welcome2 />
          <UsersBooks />
          <AllBooks />
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Books;
