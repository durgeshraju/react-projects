import React, {useEffect, useState} from "react";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroUnitBlock from "./components/HeroUnitBlock/HeroUnitBlock";
import JsonData from "./content/data.json";

function App() {
const [landingPageData, setLandingPageData] = useState({});
useEffect(() => {
setLandingPageData(JsonData);
}, []);
//console.log(landingPageData.ceplHeader);
  return (
    <Fragment>      
      <Header data={landingPageData.ceplHeader} />      
      <HeroUnitBlock />      
    </Fragment>
  );
}

export default App;
