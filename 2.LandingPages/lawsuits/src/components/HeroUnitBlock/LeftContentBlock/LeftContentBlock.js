import React, {Fragment} from "react";
import classes from './LeftContentBlock.module.css';
const LeftContentBlock = props => {
    return(
        <Fragment>                        
            {props.data
              ? props.data.primaryContentWidget.map((d, i) => (
                <Fragment key={i}>
                <div className={classes.herounitPrimaryContentSection}>
                <div className="my-5">
                <h1 className="fw-bolder mb-3">{d.title}</h1>        
                <p className="lead text-white mb-5 fs-5">{d.description}</p>      
                </div>
                </div>            
                </Fragment>                    
                )) : "loading"                
            }  
            {props.data
              ? props.data.secondaryContentWidget.map((d, i) => (
                <Fragment key={i}>
                <div className="my-5">
                <div className={classes.herounitSecondaryContentSection}>                
                <h2 className="fw-bolder mb-2">{d.title}</h2>        
                <p className="lead text-white mb-3">{d.description}</p>   
                <h3><span className="fs-4">Call Us: </span><a href="tel:+6494461709">{d.phone}</a></h3>  
                </div>
                </div>           
                </Fragment>                    
                )) : "loading"                
            }    
        </Fragment>
    )
};
export default LeftContentBlock;