import React from 'react';
import {useDrag} from "react-dnd";


const Element = ({locateElement, type, width, id}) => {
    const [{opacity}, drag] = useDrag(
        () => ({
            type,
            item: {id},
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult()
                if (item && dropResult) {
                    locateElement(dropResult.x, dropResult.y, type, item.id)
                }
            },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [locateElement, type],
    )

    return (
        <div>
            <img
                ref={drag}
                style={{opacity}}
                src={process.env.PUBLIC_URL + `/img/elements/${type}.png`}
                width={width ? width : '70px'}
                alt='table'
            /></div>)
};

export default Element;