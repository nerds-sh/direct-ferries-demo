import { useFormikContext } from "formik"

export const useErrors = () => {
    const { errors } = useFormikContext()

    return Object.values(errors)
}