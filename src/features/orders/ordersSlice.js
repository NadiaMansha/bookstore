import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const url="https://90wb7h7uk0.execute-api.us-east-1.amazonaws.com/dev/orders";
const token = JSON.parse(localStorage.getItem("userToken")) || null;

//get orders
export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async () => {
        const response = await fetch(url,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

            );
        const data = await response.json();
        return data.data;
    }
);

//get user orders
export const fetchUserOrders = createAsyncThunk(
    "orders/fetchUserOrders",
    async () => {
        const response = await fetch(url+"/user-orders",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

            );
        const data = await response.json();
        return data.data;
    }
);


const initialState = {
    orders: [],
    status: "idle",
    error: null
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        orderAdded(state, action) {
            state.orders.push(action.payload);
        },
        orderUpdated(state, action) {
            const { id, status } = action.payload;
            const existingOrder = state.orders.find((order) => order.id === id);
            if (existingOrder) {
                existingOrder.status = status;
            }
        }
    },
    extraReducers: {
        [fetchOrders.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.orders = state.orders.concat(action.payload);
        },
        [fetchOrders.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [fetchUserOrders.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchUserOrders.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.orders = state.orders.concat(action.payload);
        },
        [fetchUserOrders.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }

    }
});


export const { orderAdded, orderUpdated } = ordersSlice.actions;
export const selectAllOrders = (state) => state.orders.orders;
export const selectOrderById = (state, orderId) =>
    state.orders.orders.find((order) => order.id === orderId);
 export const selectStatus = (state) => state.orders.status;
 export const selectError = (state) => state.orders.error;   
export default ordersSlice.reducer;