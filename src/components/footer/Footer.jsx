import { Container, Grid } from "@mui/material";
import React from "react";
import listFooter from "../../data/ListFooter.json";
import ListFooter from "./ListFooter";
const Footer = () => {
  return (
    <div className="mt-12 bg-[#d5d5d5]">
      <Container>
        <Grid container spacing={2} columns={15} className="py-[30px]">
          {listFooter.map((item) => (
            <Grid item xs={3}>
              <ListFooter data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
