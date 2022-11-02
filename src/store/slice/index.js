import { configureStore } from "@reduxjs/toolkit";
import { addNftSlice } from "./render";


const store = configureStore({
    reducer:{
        rend: addNftSlice.reducer
    }
})

export default store