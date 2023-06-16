import {
  ShoppingCartOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const catalogueNavTree = [{
  key: 'catalogue',
  path: `${APP_PREFIX_PATH}/catalogue`,
  title: 'sidenav.catalogue',
  icon: ShoppingCartOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'goods',
      path: `${APP_PREFIX_PATH}/catalogue/goods`,
      title: 'sidenav.catalogue.goods',
      icon: '',
      breadcrumb: false,
      submenu: [{
        key: 'goods',
        path: `${APP_PREFIX_PATH}/catalogue/goods`,
        title: 'sidenav.catalogue.goods',
        icon: '',
        breadcrumb: false,
        submenu: []
      }]
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...catalogueNavTree,
]

export default navigationConfig;
