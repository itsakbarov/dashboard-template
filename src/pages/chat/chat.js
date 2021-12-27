import classes from './chat.module.scss'
import {Link} from "react-router-dom";
import {
    MoreOutlined,
    SearchOutlined,
    ContactsOutlined,
    MessageOutlined,
    UserOutlined,
    SettingFilled
} from "@ant-design/icons";
import React, {useState} from "react";
import {TOOLBAR_DATAS} from "../../constants";
import Image from "../../assets/images/avatar.jpg";

const Chat = React.memo(props => {
    const [toolbarState, setToolbarState] = useState(1)
    const [currentUser, setCurrentUser] = useState({
        name: "Manager",
        message: "Hey there",
        image: 'Image',
        status: true
    })
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
                        <div className={classes.col}>
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
                    <div className={classes.search}>
                        <label htmlFor="search">
                            <SearchOutlined/>
                        </label>
                        <input type="text" id={'search'} placeholder={'Search...'}/>
                    </div>
                    <div className={classes.tabs}>
                        <button>
                            <MessageOutlined/>
                            Chat
                        </button>
                        <button>
                            <UserOutlined/>
                            Group
                        </button>
                        <button className="active">
                            <ContactsOutlined/>
                            Contacts
                        </button>
                    </div>
                    <div className={classes.toolbarContent}>
                        {toolbarState === 1 ? (<>
                            <p>Recent</p>
                            {TOOLBAR_DATAS.users.map(user => (
                                <div className={classes.user}>
                                    <img src={user.image} alt=""/>
                                    <div className={classes.userDetails}>
                                        <h3>{user.name}</h3>
                                        <p>{user.message}</p>
                                    </div>
                                </div>
                            ))}
                        </>) : toolbarState === 2 ? (<></>) : toolbarState === 3 ? (<></>) : null}
                    </div>
                </div>
                <div className={classes.chatField}>
                    <div className={classes.chatHeader}>
                        <div>
                            <h3 className="userName">{currentUser.name}</h3>
                            <p className={classes.status}>{currentUser.status ? (
                                <>online</>
                            ) : (
                                <>offline</>
                            )}</p>
                        </div>
                        <div className={classes.chatActions}>
                            <input type="search" className={classes.chatSearchInput} placeholder={"Search..."}/>
                            <button><SettingFilled/></button>
                            <button>
                                <MoreOutlined/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default Chat