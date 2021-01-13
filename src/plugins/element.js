import Vue from 'vue'
import {
    Button,
    Input,
    Avatar,
    Form,
    FormItem,
    Icon,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Drawer,
    Dialog,
    MessageBox,
    Message,
    Loading
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Avatar)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Drawer)
Vue.use(Dialog)
Vue.use(Loading)
Vue.prototype.$confirm = MessageBox.confirm;