const InitialState = {
  token: "",
};

export function rootReducer(state = InitialState, action: any) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "REMOVE_TOKEN":
      return { ...state, token: "" };
    default:
      return state;
  }
}
