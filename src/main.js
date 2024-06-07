import './assets/styles/main.css'

import 'typeface-nunito'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "@/locales/i18n"

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar'
import Button from "primevue/button"
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Rating from 'primevue/rating'
import Calendar from 'primevue/calendar'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import FileUpload from 'primevue/fileupload'
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Dropdown from 'primevue/dropdown';
import SelectButton from 'primevue/selectbutton'
import Avatar from 'primevue/avatar'
import PanelMenu from 'primevue/panelmenu';
import Badge from 'primevue/badge';
import Sidebar from 'primevue/sidebar';
import Fieldset from 'primevue/fieldset'
import InputNumber from 'primevue/inputnumber';
import Message from 'primevue/message';



const app = createApp(App)

app
    .use(router)
    .use(i18n)
    .use(PrimeVue)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-input-text', InputText)
    .component('pv-textarea', Textarea)
    .component('pv-card', Card)
    .component('pv-checkbox', Checkbox)
    .component('pv-rating', Rating)
    .component('pv-calendar', Calendar)
    .component('pv-tab-view', TabView)
    .component('pv-tab-panel', TabPanel)
    .component('pv-file-upload', FileUpload)
    .component('pv-data-view',DataView)
    .component('pv-data-view-options',DataViewLayoutOptions)
    .component('pv-icon-filed',IconField)
    .component('pv-input-icon',InputIcon)
    .component('pv-dropdown',Dropdown)
    .component('pv-select-button',SelectButton)
    .component('pv-avatar',Avatar)
    .component('pv-panel-menu',PanelMenu)
    .component('pv-badge',Badge)
    .component('pv-sidebar',Sidebar)
    .component('pv-fieldset',Fieldset)
    .component('pv-input-number',InputNumber)
    .component('pv-message',Message)


    .mount('#app')
