import {Card} from "antd";
import Element from "./Element";
import {ElementTypes} from "./ConstructorData";

const ElementsMenu = ({addOnBoard}) => {
    return(
        <Card title={'Меню элементов'} bodyStyle={{'padding': '20px'}}>
            <Element addOnBoard={addOnBoard} type={ElementTypes.TABLE}/>
        </Card>
    )
}

export default ElementsMenu