import { RouteParams } from "./types/global";

import Home from "./pages/Home";

import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";

export const routesConfig = [
  { path: "/", label: "Home", component: Home },
  { path: "/gallery", label: "Gallery", component: Gallery },
  {
    path: "/photo/:id",
    label: (params: RouteParams) => params.id,
    component: Photo,
  },
];
