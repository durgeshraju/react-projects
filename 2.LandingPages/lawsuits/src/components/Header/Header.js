import classes from './Header.module.css'
const Header = (props) => {
    debugger
    return(                 
        <div className={["shadow-sm" + ' ' +"fixed-top"]}>               
        <header className={classes.header}>               
        <div className="container d-flex align-items-center justify-content-between">
            {/*<h1 className={classes.logo}><a href={()=> false}></a></h1>*/}
            <div className={classes.logo}><img alt="BootstrapMade" src={props.data ? props.data.logo: 'loading'} /></div>
        </div>   
        <div className="header-free-consulation-wrapper">
        {props.data
            ? props.data.HeaderRightContentCol.map((d, i) => (
                <div>
                <h2>{d.title}</h2>                                
                </div>       
        )): "loading"}        
        </div>     
        </header>
        </div>

    )
}

export default Header;