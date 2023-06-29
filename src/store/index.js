import { createStore } from 'vuex'
import todos from './modules/todos';

export default createStore({
    module: {
        todos
    }
})