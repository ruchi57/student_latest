import { createStore } from "redux";
import rootReducer from "../reducer/RootReducer";

// const store = createStore(rootReducer);

// export default store;

export function configureStore() {
    const store = createStore(rootReducer);
    return store;
  };
  
export const store = configureStore();