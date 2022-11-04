import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   items: [],
   singlenft: {},
}
export const addNftSlice = createSlice({
   name: 'render',
   initialState,
   reducers: {
      getNftid: (state, action)=>{
         state.singlenft = action.payload
      },
      renderData(state, action) {
        console.log(action.payload.assets, "assets");
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