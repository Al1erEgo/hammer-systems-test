import {Card} from "antd";
import BoardCell from "./BoardCell";
import Element from "./Element";

const renderElement = (x, y, elementsOnBoard) => {
    if (elementsOnBoard[x][y]) {
         return <Element type={elementsOnBoard[x][y]} width={'100%'} />
    }
}

const renderCell = (i, addOnBoard, elementsOnBoard) => {
    const x = i % 10
    const y = Math.floor(i / 10)

    return (
        <div key={i} style={{minWidth: '3vw', minHeight: '3vw', maxWidth: '3vw', maxHeight: '3vw'}}>
            <BoardCell x={x} y={y} addOnBoard={addOnBoard}>
                {renderElement(x, y, elementsOnBoard)}
            </BoardCell>
        </div>
    )
}

const getBoard = (addOnBoard, elementsOnBoard) => {
    const board = []

    for (let i = 0; i < 100; i++) {
        board.push(renderCell(i, addOnBoard, elementsOnBoard))
    }

    return board
}

const Board = ({addOnBoard, elementsOnBoard}) => {
    const board = getBoard(addOnBoard, elementsOnBoard)

    return (
        <Card title={'Карта заведения'} bodyStyle={{'padding': '20px'}}>
            <div style={{
                display:"flex",
                margin: '0 auto',
                flexWrap: "wrap",
                maxWidth: '30vw',
                minWidth: '30vw'}}>
                {board}
            </div>
        </Card>
    )
}
export default Board