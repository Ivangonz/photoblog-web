import { RouteParams } from "./types/global";

import Home from "./pages/Home";

import Gallery from "./pages/Gallery";
import  BlogPost from "./pages/BlogPost";

export const routesConfig = [
  { path: "/", label: "Home", component: Home },
  { path: "/gallery", label: "Gallery", component: Gallery },
  {
    path: "/blog-post/:id",
    label: (params: RouteParams) => params.id,
    component: BlogPost,
  },
];
