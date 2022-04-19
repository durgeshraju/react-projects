const Footer = props => {
    return(
        <footer>
            <h2>Footer | {props.data ? props.data.title: 'loading'}</h2>       
            <div>
            {props.data
            ? props.data.ceplTermsConditionsBlock.map((d, i) => (
                <div key={i}>
                <h2>{d.title}</h2>
                <p>{d.paragraph}</p>                
                </div>       
            ))
            : "loading"}  
            </div>     
        </footer>
    )
}
export default Footer;