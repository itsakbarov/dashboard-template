import classes from "./board.module.scss"
import React from "react";

const Board = React.memo(props => {
    return (
        <div className={classes.board}>
            KANBAN BOARD
        </div>
    );
});
export default Board