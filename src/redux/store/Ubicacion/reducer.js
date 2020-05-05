const initialState = { ubicacion: "123" };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ACTUALIZAR_UBICACION':
            return {
                ...state, ubicacion: action.payload
            };
        default:
            return state;
    }
}

export const selectActiveUbicacion = state => state.ubicacionReducer.ubicacion;