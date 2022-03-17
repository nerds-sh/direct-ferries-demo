import { useFormikContext } from "formik"

export const Content = ({children}: {children: any}) => {
    const {handleSubmit} = useFormikContext()

    return <form onSubmit={handleSubmit}>
        <div className="content">
            {children}
        </div>
    </form>
}