const actualizarUbicacion = ubicacion => {
    return {
        type: 'ACTUALIZAR_UBICACION',
        payload: ubicacion
    }
}

export default actualizarUbicacion;