import React, {useEffect, useState} from "react";
import LeftContentBlock from "./LeftContentBlock/LeftContentBlock";
import ContactForm from "./ContactForm/ContactForm";
import HeroUnitData from "../../content/HeroUnitData.json";
import classes from './HeroUnitBlock.module.css';
import Card from "../../sharedUI/Card";

const HeroUnitBlock = props => {
const [landingPageData, setLandingPageData] = useState({});
useEffect(() => {
setLandingPageData(HeroUnitData);
}, []);
    return(        
    <section className={classes['herounit-wrapper']}>   
        <div className="container px-2 py-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-8 col-xxl-8">
                    <div className="my-3 text-center text-xl-start">                    
                        <LeftContentBlock data={landingPageData.ceplHeroUnitContent}  />
                    </div>
                </div>
                <div className="col-xl-4 col-xxl-4 d-none d-xl-block my-3">
                    <Card>
                        <ContactForm />
                    </Card>
                </div>
            </div>
        </div>         
    </section>
    )
}
export default HeroUnitBlock;