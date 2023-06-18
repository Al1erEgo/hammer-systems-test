import {Button, Card, Upload} from "antd";

const ActionsMenu = ({save, load}) => {

    return (
        <Card bodyStyle={{'padding': '20px'}}>
            <Button onClick={save} type='primary'>Сохранить в файл</Button>
            <Upload showUploadList={false} accept=".txt" customRequest={load}>
                <Button style={{marginTop: '10px'}} >Загрузить из файла</Button>
            </Upload>
        </Card>
    )
}

export default ActionsMenu;