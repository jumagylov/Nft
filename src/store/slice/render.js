import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   items: [],
}
export const addNftSlice = createSlice({
   name: 'render',
   initialState,
   reducers: {
      renderData(state, action) {
        console.log(action);
         state.items =  action.payload.assets
      },
   },
})

const nftAction = addNftSlice.actions
export default nftAction


export const getNftData = () => {
    return async (dispatch) => {
       const data = await fetch("https://api.opensea.io/api/v1/assets?format=json")
       const newData = await data.json()
       console.log(newData);
        dispatch(nftAction.renderData(newData))
    }
 }