import { Content } from "./content";
import { Provider } from "./provider";
import { Props } from "./types";
import './style.scss'

export const Form = ({children, ...props}: Props) => <Provider {...props}>
    <Content>
        {children}
    </Content>
</Provider>