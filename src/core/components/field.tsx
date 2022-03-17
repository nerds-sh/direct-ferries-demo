import { useField } from "formik";

export const Field = ({name}: {name: string}) => {
    const [{value, onChange}] = useField(name)

    return <>
        <input name={name} value={value} onChange={onChange} />
    </>;
} 