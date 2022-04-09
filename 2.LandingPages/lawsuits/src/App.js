import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroUnitBlock from "./components/HeroUnitBlock/HeroUnitBlock";

function App() {
  return (
    <Fragment>      
      <Header />
      <HeroUnitBlock />
      <Footer />
    </Fragment>
  );
}

export default App;
