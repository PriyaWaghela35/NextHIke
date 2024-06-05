import Icon from "@mui/material/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";

const routes = [
  {
    name: "Home",
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
    ],
  },
  {
    name: "Class",
    icon: <Icon>view_day</Icon>,
  },
  {
    name: "Promo",
    icon: <Icon>article</Icon>,
  },
  {
    name: "Online-Class",
    icon: <Icon>view_day</Icon>,
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://www.github.com",
  },
];

export default routes;
