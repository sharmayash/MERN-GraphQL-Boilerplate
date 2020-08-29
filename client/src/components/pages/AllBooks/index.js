import React from "react";
import { Grid } from "semantic-ui-react";

import AllBooks from "./AllBooks";
import Footer from "../../layouts/Footer";

const Books = () => {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <Grid>
          <AllBooks />
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Books;
