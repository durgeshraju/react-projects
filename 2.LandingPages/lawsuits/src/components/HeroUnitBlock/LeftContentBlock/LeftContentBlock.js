import React, {Fragment} from "react";
const LeftContentBlock = props => {
    return(
        <Fragment>                        
            {props.data
              ? props.data.primaryContentWidget.map((d, i) => (
                <Fragment key={i}>
                <h1 className="display-5 fw-bolder text-white mb-2">{d.title}</h1>
                </Fragment>                    
                )) : "loading"
            }         
        </Fragment>
    )
};
export default LeftContentBlock;