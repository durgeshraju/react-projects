import React, {useEffect, useState} from "react";
import LeftContentBlock from "./LeftContentBlock/LeftContentBlock";
import ContactForm from "./ContactForm/ContactForm";
import HeroUnitData from "../../content/HeroUnitData.json";
import classes from './HeroUnitBlock.module.css';

const HeroUnitBlock = props => {
const [landingPageData, setLandingPageData] = useState({});
useEffect(() => {
setLandingPageData(HeroUnitData);
}, []);
    return(        
    <section className={classes['herounit-wrapper']}>   
        <div className="container px-5 py-5">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-8 col-xl-7 col-xxl-7">
                    <div className="my-5 text-center text-xl-start">                    
                        <LeftContentBlock data={landingPageData.ceplHeroUnitContent}  />
                    </div>
                </div>
                <div className="col-xl-5 col-xxl-5 d-none d-xl-block text-center">
                    <ContactForm />
                </div>
            </div>
        </div>         
    </section>
    )
}
export default HeroUnitBlock;