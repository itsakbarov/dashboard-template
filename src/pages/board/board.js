import classes from "./board.module.scss"
import {DragDropContext} from 'react-beautiful-dnd';

const Board = () => {
    return (
        <div className={classes.board}>
            <DragDropContext>
                a
            </DragDropContext>
        </div>
    )
}
export default Board