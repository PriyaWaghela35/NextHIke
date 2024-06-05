import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={"Walk in nature as a recreational Activity."}
                description="Hiking is a wonderful outdoor activity that involves walking on trails or paths through natural landscapes such as mountains, forests, or coastal areas. It offers a chance to connect with nature, enjoy scenic views, and experience the benefits of physical exercise. Whether you're a beginner or an experienced trekker, hiking provides an opportunity to explore new places, discover hidden gems, and unwind from the hustle and bustle of everyday life."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="Hiking is a wonderful outdoor activity that involves walking on trails or paths through natural landscapes such as mountains, forests, or coastal areas. It offers a chance to connect with nature, enjoy scenic views, and experience the benefits of physical exercise. Whether you're a beginner or an experienced trekker, hiking provides an opportunity to explore new places, discover hidden gems, and unwind from the hustle and bustle of everyday life."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="🏔️"
                  title="Mountain Majesty Trail"
                  description="Experience the awe-inspiring views of the Mountain Majesty Trail. This moderate hike takes you through lush forests and offers panoramic vistas from the summit. Ideal for those looking to immerse themselves in nature’s grandeur."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="🌳"
                  title="Serene Valley Path"
                  description="Discover the peace and tranquility of the Serene Valley Path. This easy trail is perfect for beginners and families, winding through gentle valleys and alongside a babbling brook. Enjoy a leisurely hike with plenty of spots for a picnic."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="🌊"
                  title="Coastal Adventure Route"
                  description="Embark on a coastal adventure with stunning ocean views along the Coastal Adventure Route. This challenging hike rewards you with dramatic cliffs, sandy beaches, and the sound of waves crashing against the shore. A must for adventure enthusiasts."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="🌳"
                  title="Forest Enchantment Loop"
                  description="Lose yourself in the enchanting beauty of the Forest Enchantment Loop. This moderate hike takes you through a dense, old-growth forest where you can enjoy the serenity and natural splendor. Perfect for those who love the deep woods."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
