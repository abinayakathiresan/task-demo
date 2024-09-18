import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: 1, name: "Aahana", month: "january", amount: 700
};

const StudentSlice = createSlice({
    name: "student",
    initialState,
    reducer:{
        addStudent: (state, action) =>{
            state.student.push(action.payload);
        },
        deleteStudent: (state, action) =>{
            state.student = state.student.filter(item=> item.id != action.payload.id);
        },
        editStudent: (state, action) =>{
            state.student = state.student.map((item) =>  {return item.id === action.payload.id ? action.payload : action;})
        }
    }
})

export const {addStudent, deleteStudent, editStudent} = StudentSlice.actions;
export default StudentSlice.reducer;