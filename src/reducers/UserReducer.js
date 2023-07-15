
const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  