import Vue from "vue";
import Vuex from "vuex";

import { explorerStore } from "@/explorer/store";
import { hubStore } from "@/hub/store";
import { portalStore } from "@/portal/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    explorer: explorerStore,
    portal: portalStore,
    hub: hubStore,
  },
});
