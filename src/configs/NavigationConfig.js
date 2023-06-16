import {
    ShoppingCartOutlined,
    DashboardOutlined,
    BellOutlined,
    UserOutlined,
    PictureOutlined,
    GiftOutlined,
    ShopOutlined,
    TeamOutlined,
    MailOutlined, SettingOutlined, MobileOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: '',
    breadcrumb: false,
    submenu: [{
        key: 'main-dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'sidenav.main.dashboard',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: []
    },
        {
            key: 'main-catalogue',
            path: `${APP_PREFIX_PATH}/main/catalogue`,
            title: 'sidenav.main.catalogue',
            icon: ShoppingCartOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'main-catalogue-goods',
                    path: `${APP_PREFIX_PATH}/main/catalogue/goods`,
                    title: 'sidenav.main.catalogue.goods',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalogue-categories',
                    path: `${APP_PREFIX_PATH}/main/catalogue/categories`,
                    title: 'sidenav.main.catalogue.categories',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalogue-collections',
                    path: `${APP_PREFIX_PATH}/main/catalogue/collections`,
                    title: 'sidenav.main.catalogue.collections',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-catalogue-combos',
                    path: `${APP_PREFIX_PATH}/main/catalogue/combos`,
                    title: 'sidenav.main.catalogue.combos',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                }
            ]
        },
        {
            key: 'main-orders',
            path: `${APP_PREFIX_PATH}/main/orders`,
            title: 'sidenav.main.orders',
            icon: BellOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-clients',
            path: `${APP_PREFIX_PATH}/main/clients`,
            title: 'sidenav.main.clients',
            icon: UserOutlined,
            breadcrumb: true,
            submenu: [{
                key: 'main-clients-combos',
                path: `${APP_PREFIX_PATH}/main/clients/user-list`,
                title: 'sidenav.main.clients.list',
                icon: '',
                breadcrumb: true,
                submenu: []
            },
                {
                    key: 'main-clients-groups',
                    path: `${APP_PREFIX_PATH}/main/clients/groups`,
                    title: 'sidenav.main.clients.groups',
                    icon: '',
                    breadcrumb: true,
                    submenu: []
                }]
        },
        {
            key: 'main-banners',
            path: `${APP_PREFIX_PATH}/main/banners`,
            title: 'sidenav.main.banners',
            icon: PictureOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-promocodes',
            path: `${APP_PREFIX_PATH}/main/promocodes`,
            title: 'sidenav.main.promocodes',
            icon: GiftOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-offlineShops',
            path: `${APP_PREFIX_PATH}/main/offlineShops`,
            title: 'sidenav.main.offlineShops',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: [
                {
                    key: 'main-offlineShops-combos',
                    path: `${APP_PREFIX_PATH}/main/offlineShops/addresses`,
                    title: 'sidenav.main.offlineShops.addresses',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                },
                {
                    key: 'main-offlineShops-combos',
                    path: `${APP_PREFIX_PATH}/main/offlineShops/geozones`,
                    title: 'sidenav.main.offlineShops.geozones',
                    icon: '',
                    breadcrumb: false,
                    submenu: []
                }
            ]
        },
        {
            key: 'main-stuff',
            path: `${APP_PREFIX_PATH}/main/stuff`,
            title: 'sidenav.main.stuff',
            icon: TeamOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'main-mailingLists',
            path: `${APP_PREFIX_PATH}/main/mailingLists`,
            title: 'sidenav.main.mailingLists',
            icon: MailOutlined,
            breadcrumb: false,
            submenu: []
        },
    ],
}
]

const systemNavTree = [{
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: '',
    breadcrumb: false,
    submenu: [{
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
    },
        {
            key: 'system-mobileApp',
            path: `${APP_PREFIX_PATH}/system/mobileApp`,
            title: 'sidenav.system.mobileApp',
            icon: MobileOutlined,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'system-logs',
            path: `${APP_PREFIX_PATH}/system/logs`,
            title: 'sidenav.system.logs',
            icon: MobileOutlined,
            breadcrumb: false,
            submenu: []
        },
    ],
}]

const navigationConfig = [
    ...mainNavTree,
    ...systemNavTree,
]

export default navigationConfig;
