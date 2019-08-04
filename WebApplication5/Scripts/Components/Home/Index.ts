import { HomeService } from "./service";
import Vue from "vue";
import Box from "./box";
const service = new HomeService();

//Vue.component('box-button', Box);

const app = new Vue({
    el: '#App',
    data: {
        aa: "sdf",
        show: true
    },
    created() {
        console.log('create');
    },
    components: {
        'box-button': Box
    }
});