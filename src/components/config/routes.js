// Components

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Accessories from "../pages/Accessories/Accessories";
import Contacts from "../pages/Contacts/Contacts";
import Courses from "../pages/Courses/Courses";
import Events from "../pages/Events/Events";
import Gallery from "../pages/Gallery/Gallery";

export const routes = [
  { name: "home", label: "Начало", url: "", component: <Home /> },
  { name: "about", label: "За нас", url: "about", component: <About /> },
  {
    name: "courses",
    name: "about",
    label: "Курсове",
    url: "courses",
    component: <Courses />,
  },
  { name: "events", label: "Събития", url: "events", component: <Events /> },
  { name: "gallery", label: "Галерия", url: "gallery", component: <Gallery /> },
  {
    name: "accessories",
    label: "Аксесоари за плуване",
    url: "accessories",
    component: <Accessories />,
  },
  {
    name: "contacts",
    label: "Контакти",
    url: "contacts",
    component: <Contacts />,
  },
];
