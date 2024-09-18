import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./Slice/StudentSlice";

export const store = configureStore({
    reducer: {
        student: StudentSlice,
    }
}
);
