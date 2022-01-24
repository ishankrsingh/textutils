import React from 'react' //type 'rfce' to get react function based component

function Alert(props) {
    //capitalize function below capitalizes first letter of the given word
    const capitalize =(word)=>{

        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        //Below we have introduced a div container with height 50px so that there is no layout shift when the alert is being displayed on the page. Also we have to include all the code inside the said div tag inside {} because it is a JS code.
        <div style={{height:'50px'}}>{
        // Here we have added 'props.alert &&' below which will check if the alert exists or not, and if it is null it will not evaluate anything on the RHS of '&&' and if alerts are not null, then it will evealuate the RHS of '&&'(As is the case in JS). Moreover, this happens because all the JSX will be converted to Javascript calls.
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
