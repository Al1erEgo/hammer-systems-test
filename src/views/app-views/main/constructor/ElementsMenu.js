import {Card} from "antd";
import Element from "./Element";
import {ElementTypes} from "./ConstructorData";

const ElementsMenu = ({locateElement}) => {
    return(
        <Card title={'Меню элементов'} bodyStyle={{'padding': '20px'}}>
            <Element locateElement={locateElement} type={ElementTypes.TABLE}/>
            <Element locateElement={locateElement} type={ElementTypes.TABLE2}/>
        </Card>
    )
}

export default ElementsMenu