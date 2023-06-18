import {Button, Card, Upload} from "antd";

const ActionsMenu = ({onSave, onLoad}) => {

    return (
        <Card bodyStyle={{'padding': '20px'}}>
            <Button style={{width: '100%'}} onClick={onSave} type='primary'>Сохранить в файл</Button>
            <Upload style={{width: '100%'}} showUploadList={false} accept=".txt" customRequest={onLoad}>
                <Button style={{marginTop: '10px', width: '100%'}} >Загрузить из файла</Button>
            </Upload>
        </Card>
    )
}

export default ActionsMenu;