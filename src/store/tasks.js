import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: null,
    toUpdate: null,
  },
  reducers: {
    setTasks: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload;
    },
    setToUpdate: (state,action) => {
      // const {uid, checked} = action.payload;
      // const existingData = state.data.find(task => task.uid === uid);
      // if(existingData){
      //   existingData.checked = checked;
      // }
      state.toUpdate = Math.random();
    }
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { setTasks,setToUpdate } = tasksSlice.actions

export default tasksSlice.reducer