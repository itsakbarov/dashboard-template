import classes from './Dashboard.module.scss'
import {useEffect, useState} from "react";

const Dashboard = () => {

    return <div className={classes.dashboard_wrapper}>
        <div className={classes.row}>
            <div className={classes.col}>
                <div className={classes.chart}>
                    <div>
                        <div className={classes.content}>
                            <h4>Number of sales</h4>
                            <h2>1424</h2>
                        </div>
                        <button>+</button>
                    </div>
                </div>
                <div className={classes.chart}>
                    <div>
                        <div className={classes.content}>
                            <h4>Number of sales</h4>
                            <h2>1424</h2>
                        </div>
                        <button>+</button>
                    </div>
                </div>
                <div className={classes.chart}>
                    <div>
                        <div className={classes.content}>
                            <h4>Number of sales</h4>
                            <h2>1424</h2>
                        </div>
                        <button>+</button>
                    </div>
                </div>
                <div className={`${classes.chart} ${classes.chart_fluid}`}>4</div>
            </div>
            <div className={classes.col}>
                <div className={classes.pie}>
                    1
                </div>
                <div className={classes.reports}>
                    2
                </div>
            </div>
        </div>
    </div>
};

export default Dashboard;