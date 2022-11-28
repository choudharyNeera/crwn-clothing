import { Routes, Route } from "react-router-dom";

import Directory from '../components/directory/Directory';
import Shop from "../components/shop/Shop";
import TopNavigation from "./topNavigation/TopNavigation";
import SignIn from "./signIn/SignIn";

const HomeRoute = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return(
    <Routes>
      <Route path='/' element={<TopNavigation />}>
        <Route index element={<Directory categories={categories}/>} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        {/* <Route path="shop" element={<Shop />} /> */}
      </Route>
    </Routes>
  )
}

export default HomeRoute;