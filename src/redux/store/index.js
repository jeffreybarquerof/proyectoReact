import { createStore, combineReducers } from 'redux';
import ubicacionReducer from './Ubicacion/reducer';

const myReducers = combineReducers({
    ubicacionReducer
});

export default () => {
    return {
        ...createStore(myReducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }
};