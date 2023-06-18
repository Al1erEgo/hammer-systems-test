import Board from "./Board";
import ElementsMenu from "./ElementsMenu";
import {Col, Row} from "antd";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useState} from "react";

const Constructor = () => {
    const [elementsOnBoard, setElementsOnBoard] = useState(
        [[], [] ,[] ,[] ,[], [], [] ,[] ,[] ,[]])

    const addElementOnBoard = (x, y, type) => {
        console.log('addOnBoard')
        setElementsOnBoard( prev => {
            const newElementsOnBoard = [...prev]
            newElementsOnBoard[x][y] = type
            return newElementsOnBoard
        })
    }

    const relocateElement = (x, y, type) => {
        setElementsOnBoard( prev => {
            const newElementsOnBoard = [...prev]
            newElementsOnBoard[x][y] = undefined
        })
    }

    console.log('elementsOnBoard', elementsOnBoard)

    return (
        <DndProvider backend={HTML5Backend}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <ElementsMenu locateElement={addElementOnBoard}/>
                </Col>
                <Col className="gutter-row" span={18}>
                    <Board
                        addElementOnBoard={addElementOnBoard}
                        elementsOnBoard={elementsOnBoard}
                    />
                </Col>
            </Row>
        </DndProvider>)
}

export default Constructor