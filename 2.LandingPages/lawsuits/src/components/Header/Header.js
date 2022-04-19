import React, {Fragment, useState} from 'react'
import classes from './Header.module.css';
const Header = (props) => {             
    return(                                        
      <header className="py-3 border-bottom shadow-sm bg-white">               
        <div className="container d-flex align-items-center justify-content-between">           
            <div className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                <img alt="BootstrapMade" src={props.data ? props.data.logo: 'loading'} />
            </div>                                          
                
        <div className="col-12 col-lg-auto mb-3 mb-lg-0">
            <div className={classes['h-phone-wrapper']}>
              {props.data
                ? props.data.HeaderRightContentCol.map((d, i) => (
                <Fragment key={i}>                                
                <span>{d.title}</span><i className="fa fa-phone"></i> {d.phone}                
                </Fragment>       
            ))
            : "loading"}                           
            </div>    
        </div>   
        </div>    
      </header>        
    )
}

export default Header;