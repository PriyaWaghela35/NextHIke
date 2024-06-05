import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={5234}
              separator=","
              title="Trecks"
              description="Of “high-performing” level are led by a certified Instructor"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3400}
              separator=","
              suffix="+"
              title="Sucess Streak"
              description="Total number of sucess in row"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={5200}
              separator=","
              title="Sucess Stories"
              description="Actively engage hicking and training activities"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
