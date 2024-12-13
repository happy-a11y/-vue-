import { defineStore } from 'pinia';
import {ref} from "vue";


export const useStore = defineStore('main', () => {
    const currentTab = ref('home')
    function setCurrentTab(tab){
            this.currentTab = tab;
        }

return { currentTab, setCurrentTab }
});