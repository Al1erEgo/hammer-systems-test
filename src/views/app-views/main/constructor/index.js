import Board from "./Board";
import ElementsMenu from "./ElementsMenu";
import {Col, Row} from "antd";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const Constructor = () => {

    return (
        <DndProvider backend={HTML5Backend}>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}><ElementsMenu/></Col>
                <Col className="gutter-row" span={18}><Board/></Col>
            </Row>
        </DndProvider>)
}

export default Constructor