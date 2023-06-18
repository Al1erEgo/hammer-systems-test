import Board from "./Board";
import ElementsMenu from "./ElementsMenu";
import {Col, Row} from "antd";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useState} from "react";

const Constructor = () => {
    const [elementsOnBoard, setElementsOnBoard] = useState(
        [[], [] ,[] ,[] ,[], [], [] ,[] ,[] ,[]])

    const addOnBoard = (x, y, type) => {
        console.log('addOnBoard')
        setElementsOnBoard( prev => {
            const newElementsOnBoard = [...prev]
            newElementsOnBoard[x][y] = type
            return newElementsOnBoard
        })
    }

    console.log('elementsOnBoard', elementsOnBoard)

    return (
        <DndProvider backend={HTML5Backend}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <ElementsMenu addOnBoard={addOnBoard}/>
                </Col>
                <Col className="gutter-row" span={18}>
                    <Board
                        addOnBoard={addOnBoard}
                        elementsOnBoard={elementsOnBoard}
                    />
                </Col>
            </Row>
        </DndProvider>)
}

export default Constructor