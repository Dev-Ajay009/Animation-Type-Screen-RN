

// Basic reducer
const initialState = {
  data: null,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload, error: null };
    case 'FETCH_DATA_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

