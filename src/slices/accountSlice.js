import {createSlice} from '@reduxjs/toolkit'

const initialState=
{
    username:"ashwini",
    totalAmount:234567
}

  export const accountSlice=createSlice({
      name:'accountSlice',
      initialState,
       reducers:{
                    withdraw:(state,action)=>{

                     
                        state.totalAmount-= 10000
                        alert("10000 WITHDRAW")
                    },

                    
                    withdraw1:(state,action)=>{

                     
                        state.totalAmount-= 5000
                        alert("5000 WITHDRAW")
                    }

       } 
  })
  export const { withdraw,withdraw1 } = accountSlice.actions

export default accountSlice.reducer