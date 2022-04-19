import React, {useEffect, useState, Fragment} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroUnitBlock from "./components/HeroUnitBlock/HeroUnitBlock";
import JsonData from "./content/data.json";

function App() {
const [landingPageData, setLandingPageData] = useState({});
const [spinner, setSpinner ] = useState(true);
useEffect(() => {
setLandingPageData(JsonData);
 setTimeout(() => setSpinner(false), 2500)
}, []);

console.log(landingPageData.ceplHeader);
  return (
    <Fragment>
      {spinner === true ? 
      <Fragment>
        <div className="loader"></div>  
      </Fragment>  :
        <Fragment>
        <Header data={landingPageData.ceplHeader} />      
        <HeroUnitBlock />        
      </Fragment>
      }
    </Fragment>
  );
}

export default App;
