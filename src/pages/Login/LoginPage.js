import classes from './Login.module.scss';
import {Route, Routes} from "react-router-dom";

const LoginPage = ({children}) => {
    return <div className={classes.login}>
        <div className={classes.content}>
            {children}
        </div>
        <div className={classes.Banner}></div>
    </div>;
}


export default LoginPage
