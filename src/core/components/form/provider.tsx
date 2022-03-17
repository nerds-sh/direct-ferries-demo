import { Formik } from "formik"
import { Props } from "./types"

export const Provider = ({children, ...props}: Props) => <Formik {...props}>
    {children}
</Formik>  