import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

import globalComponents from "@/components";

createApp(App)
  .use(store)
  .use(router)
  .use(globalComponents)
  .mount("#app");
