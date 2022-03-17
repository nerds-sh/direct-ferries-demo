import { Provider } from "react-redux";
import { store } from "./store";

export const Redux = ({children}: {children: any}) => <Provider store={store()}>
    {children}
</Provider>