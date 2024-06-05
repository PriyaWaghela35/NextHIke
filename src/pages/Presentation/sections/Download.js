import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 10, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={10} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h1" color="white">
              Do you love this awesome
            </MKTypography>
            <MKTypography variant="h2" color="white" mb={2}>
              Full Kit for Hike &amp; and camping and mountain trekking.
            </MKTypography>
            <br />
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href=""
              sx={{ mb: 2 }}
            >
              Download Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
