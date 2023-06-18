import {useDrop} from "react-dnd";
import {ElementTypes} from "./ConstructorData";

const BoardCell = ({x, y, children}) => {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: [ElementTypes.TABLE, ElementTypes.TABLE2],
            drop: (item) => {
                return {x, y}
            },
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