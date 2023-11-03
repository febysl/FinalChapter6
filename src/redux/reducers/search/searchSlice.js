import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dataSearch : [],
}

const searchSlice = createSlice({
    name: "dataSearch",
    initialState,
    reducers : {
        setSearch: (state, action) => {
            state.dataSearch = action.payload;
        }

    }
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer;