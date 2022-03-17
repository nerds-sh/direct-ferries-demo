import { Error } from "./error"
import { useErrors } from "../hooks"

export const Errors = ():any => {
    const errors = useErrors()

    return errors.map((error: any) => <Error key={error} error={error} />)
}