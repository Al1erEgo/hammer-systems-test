import {useDrop} from "react-dnd";
import {ElementTypes} from "./ConstructorData";

const BoardCell = ({x, y, addOnBoard, children}) => {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ElementTypes.TABLE,
            drop: () => ({x, y}),
            // canDrop: () => canMoveKnight(x, y),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        }),
        [x, y]
    )
    return <div
        ref={drop}
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'gray',
            border: 'solid black 1px'
        }}>
        {children}
    </div>
}

export default BoardCell