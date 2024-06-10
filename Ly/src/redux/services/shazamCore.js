import { createApi,fetchBaseQuery } from ""


const options ={
    method : 'GET',
    headers : {
        'X-RapidAPI-Key': "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
        'X-RapidAPI-Host':
    }
}

export const ShazamCoreApi = configureStore({
    reducer:{
        [ShazamCoreApi.reducerApi.reducerPath]: shazazamCoreApi.reducer,
        player: playerReducer,
    },
})