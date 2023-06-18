import {useDrop} from "react-dnd";
import {ElementTypes} from "./ConstructorData";

const BoardCell = ({ x, y, children}) => {
    const [{isOver}, drop] = useDrop(
        () => ({
            accept: [ElementTypes.TABLE, ElementTypes.TABLE2],
            drop: () => ({x, y}),
            collect: (monitor) => ({
                isOver: !!monitor.isOver() ? 'green' : 'lightgray',
            })
        }),
        [x, y]
    )
    return (
        <div
            ref={drop}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: isOver,
                border: 'solid black 1px'
            }}>
            {children}
        </div>
    )
}

export default BoardCell