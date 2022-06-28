import {createSlice} from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name:"Auth",
    initialState :{ value: { isConected: false ,uid:"",name:"",email:"",photoURL:""}},
    reducers:{
        login:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {login} = AuthSlice.reducer;
export default AuthSlice.reducer;