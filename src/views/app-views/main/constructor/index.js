import Board from "./Board";
import ElementsMenu from "./ElementsMenu";
import {Col, Row} from "antd";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useState} from "react";
import {v1 as uuid} from "uuid";

const Constructor = () => {
    const [elementsOnBoard, setElementsOnBoard] = useState(
        [[], [] ,[] ,[] ,[], [], [] ,[] ,[] ,[], {}])


    const elementMover = (x, y, type, id) => {
        if (id) {
            console.log('oldX', elementsOnBoard[10][id])
            setElementsOnBoard( prev => {
                const newElementsOnBoard = [...prev]
                const oldX = newElementsOnBoard[10][id][0]
                const oldY = newElementsOnBoard[10][id][1]
                newElementsOnBoard[oldX][oldY] = undefined
                newElementsOnBoard[x][y] = {type, id}
                newElementsOnBoard[10][id] = [x, y]
                return newElementsOnBoard
            })
        } else {
            setElementsOnBoard( prev => {
                const id = uuid()
                const newElementsOnBoard = [...prev]
                newElementsOnBoard[x][y] = {type, id}
                newElementsOnBoard[10][id] = [x, y]
                return newElementsOnBoard
            })
        }
    }

    const addElementOnBoard = (x, y, type) => {
        console.log('addOnBoard')
        setElementsOnBoard( prev => {
            const id = uuid()
            const newElementsOnBoard = [...prev]
            newElementsOnBoard[x][y] = {type, id}
            newElementsOnBoard[10][id] = [x, y]
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
                    <ElementsMenu locateElement={elementMover}/>
                </Col>
                <Col className="gutter-row" span={18}>
                    <Board
                        addElementOnBoard={elementMover}
                        elementsOnBoard={elementsOnBoard}
                    />
                </Col>
            </Row>
        </DndProvider>)
}

export default Constructor