import classes from './chat.module.scss'
import {Link} from "react-router-dom";
import {MoreOutlined} from "@ant-design/icons";

const Chat = () => {
    return (
        <div className={classes.chatWrapper}>
            <div className={classes.header}>
                <h2>Dashboard</h2>
                <p className={classes.breadcrumbs}>
                    <Link to="/">Eurosoft</Link>
                    {" > "}
                    <Link to="/chat">Chat</Link>
                </p>
            </div>
            <div className={classes.content}>
                <div className={classes.toolbar}>
                    <div className={classes.user}>
                        <div className="col">
                            <img src="http://nazox-v-light.react.themesdesign.in/static/media/avatar-1.3921191a.jpg"
                                 alt=""
                                 className={classes.user_image_container}/>
                            <div className={classes.user_details}>
                                <h3>Henry Wells</h3>
                                <p>Active</p>
                            </div>
                        </div>
                        <div className={classes.dropdown}>
                            <button>
                                <MoreOutlined/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.chatField}></div>
            </div>
        </div>
    )
}
export default Chat