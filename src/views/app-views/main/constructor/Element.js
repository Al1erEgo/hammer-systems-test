import React from 'react';
import {useDrag} from "react-dnd";


const Element = ({addOnBoard, type, width}) => {
    const [{opacity}, drag] = useDrag(
        () => ({
            type,
            item: {type},
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult()
                if (item && dropResult) {
                    addOnBoard(dropResult.x, dropResult.y, type)
                }
            },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [type],
    )

    return (
        <img
            ref={drag}
            style={{opacity}}
            src={process.env.PUBLIC_URL + '/img/elements/table.png'}
            width={width ? width :'70px'}
            alt='table'
        />)
};

export default Element;