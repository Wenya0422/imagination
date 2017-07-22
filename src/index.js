import './index.less'

import game from './game.vue'


const v = new Vue({
    data: {},
    components: {
        game: game
    },
})

window.addEventListener('load', event => {
    v.$mount('#app')
})