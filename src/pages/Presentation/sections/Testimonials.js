import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ Hiker
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Nick Willever"
              date="1 day ago"
              review="Absolutely love the durability and comfort of their gear, made my hiking experience so much better!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="Couldn't have asked for better quality at such an affordable price. Highly recommend for any hiking enthusiast!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Impressed by how lightweight yet sturdy their equipment is. Made my trekking trips a breeze!"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
