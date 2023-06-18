import {Card} from "antd";
import Element from "./Element";
import {ElementTypes} from "./ConstructorData";

const ElementsMenu = ({locateElement}) => {
    return (
        <Card title={'Меню элементов'} bodyStyle={{'padding': '20px'}}>
            <div style={{display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'center'}}>
                {Object.values(ElementTypes).map(element => <Element locateElement={locateElement} type={element}/>)}
            </div>
        </Card>
    )
}

export default ElementsMenu