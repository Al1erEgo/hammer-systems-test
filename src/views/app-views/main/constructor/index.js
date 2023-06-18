import Board from "./Board";
import ElementsMenu from "./ElementsMenu";
import {Col, Row} from "antd";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useState} from "react";
import {v1 as uuid} from "uuid";
import ActionsMenu from "./ActionsMenu";

const getText = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

const placeNewElement = (x, y, type, setElement) => {
    setElement(prev => {
        const id = uuid()
        const newElementsOnBoard = [...prev]
        newElementsOnBoard[x][y] = {type, id}
        newElementsOnBoard[10][id] = [x, y]
        return newElementsOnBoard
    })
}

const relocateElement = (x, y, type, id, setElement) => {
    setElement(prev => {
        const newElementsOnBoard = [...prev]
        const oldX = newElementsOnBoard[10][id][0]
        const oldY = newElementsOnBoard[10][id][1]
        newElementsOnBoard[oldX][oldY] = undefined
        newElementsOnBoard[x][y] = {type, id}
        newElementsOnBoard[10][id] = [x, y]
        return newElementsOnBoard
    })
}

const Constructor = () => {
    const [elementsOnBoard, setElementsOnBoard] = useState(
        [[], [], [], [], [], [], [], [], [], [], {}])

    const elementMover = (x, y, type, id) => {
        if (id) {
            relocateElement(x, y, type, id, setElementsOnBoard)
        } else {
            placeNewElement(x, y, type, setElementsOnBoard)
        }
    }

    const saveCoordinatesToFile = async () => {
        const blob = new Blob([JSON.stringify(elementsOnBoard)], {type: 'application/json'});
        const element = document.createElement('a');
        element.download = 'Расстановка.txt';
        element.href = URL.createObjectURL(blob);
        document.body.appendChild(element);
        element.click();
    };

    const loadCoordinatesFromFile = async (action) => {
        if (action) {
            const text = await getText(action.file)
            const newElementsOnBoard = JSON.parse(text)
            setElementsOnBoard(newElementsOnBoard)
        }
    }

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
            <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                    <ActionsMenu
                        onSave={saveCoordinatesToFile}
                        onLoad={loadCoordinatesFromFile}
                    />
                </Col>
            </Row>
        </DndProvider>)
}

export default Constructor