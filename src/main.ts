import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'normalize.css/normalize.css'
import { installElementPlus } from "@/common/components/element-plus";

const app: any = createApp(App);

app.use(store).use(router).use(installElementPlus).mount("#app");
