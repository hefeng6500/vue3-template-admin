import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
import "@/styles/index.scss";
import { installElementPlus } from "@/common/components/element-plus";
import { ElMessageBox, ElMessage, ElNotification } from "element-plus";
import initSvgIcon from "@/icons/index";

const app: any = createApp(App);

app
  .use(store)
  .use(router)
  .use(installElementPlus)
  .use(initSvgIcon)
  .mount("#app");

// vue实例上挂载属性类型声明
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $notify: typeof ElNotification;
    $confirm: typeof ElMessageBox.confirm;
    $alert: typeof ElMessageBox.alert;
    $prompt: typeof ElMessageBox.prompt;
  }
}
