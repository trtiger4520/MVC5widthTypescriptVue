import { Vue, Component } from "vue-property-decorator";


@Component({
    name: 'Box',
    template: `<button v-on:click="TouchMe">點我{{count}}</button>`

})
export default class Box extends Vue {
    count: number = 0;

    TouchMe() {
        this.count++;
    }
}