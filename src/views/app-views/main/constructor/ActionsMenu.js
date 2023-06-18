import {Button, Card, Upload} from "antd";

const ActionsMenu = ({onSave, onLoad}) => {

    return (
        <Card bodyStyle={{'padding': '20px'}}>
            <Button onClick={onSave} type='primary'>Сохранить в файл</Button>
            <Upload showUploadList={false} accept=".txt" customRequest={onLoad}>
                <Button style={{marginTop: '10px'}} >Загрузить из файла</Button>
            </Upload>
        </Card>
    )
}

export default ActionsMenu;