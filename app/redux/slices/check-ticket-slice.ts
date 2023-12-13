import {createSlice} from '@reduxjs/toolkit';
import {CheckTicketProcess} from '@services';

export const CheckTicketSlice = createSlice({
  name: 'checkTicket',
  initialState: {
    isLoading: {},
    message: {},
    status: {},
    error: {},
    data: {},
  },
  reducers: {
    resetTicket: state => {
      state.isLoading = {};
      state.error = {};
      state.status = {};
      state.message = {};
      state.data = {};
    },
    resetError: state => {
      state.error = {};
    },
  },
  extraReducers: builder => {
    //CheckTicketProcess
    builder.addCase(CheckTicketProcess.pending, state => {
      state.isLoading = {...state.isLoading, CheckTicketProcess: true};
    });
    builder.addCase(CheckTicketProcess.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, CheckTicketProcess: false};
      state.message = {
        ...state.message,
        CheckTicketProcess: action.payload?.message,
      };
      state.status = {
        ...state.status,
        CheckTicketProcess: action.payload?.status,
      };

      state.data = {
        ...state.data,
        CheckTicketProcess: action.payload?.data,
      };
    });
    builder.addCase(CheckTicketProcess.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, CheckTicketProcess: false};
      state.error = {
        ...state.error,
        CheckTicketProcess: action.error || action.payload,
      };
    });
  },
});

export const {resetError, resetTicket} = CheckTicketSlice.actions;
export default CheckTicketSlice.reducer;
