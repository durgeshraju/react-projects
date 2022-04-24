import React, {Fragment} from "react";
import classes from './LeftContentBlock.module.css';
const LeftContentBlock = props => {
    return(
        <Fragment>                        
            {props.data
              ? props.data.primaryContentWidget.map((d, i) => (
                <Fragment key={i}>
                <div className={classes.herounitPrimaryContentSection}>
                <h1 className="display-6 fw-bolder mb-2">{d.title}</h1>        
                <p className="lead text-white mb-5">{d.description}</p>      
                </div>            
                </Fragment>                    
                )) : "loading"                
            }  
            {props.data
              ? props.data.secondaryContentWidget.map((d, i) => (
                <Fragment key={i}>
                <div className={classes.herounitSecondaryContentSection}>
                <h2 className="fw-bolder mb-2">{d.title}</h2>        
                <p className="lead text-white mb-3">{d.description}</p>   
                <h3><span className="fs-4">Call Us: </span><a href="tel:+6494461709">{d.phone}</a></h3>    
                </div>           
                </Fragment>                    
                )) : "loading"                
            }    
        </Fragment>
    )
};
export default LeftContentBlock;