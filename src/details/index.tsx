import { schema } from "./schema";
import { Field } from 'src/core/components/field'
import { Errors } from "./errors";
import { Submit } from "./submit";
import { Form } from "src/core/components/form";

const initialValues = {
    route: 'Calais - Dover',
    adults: 1,
    children: 0,
    pets: 0
}

const onSubmit = (values: any) => console.log('values', values)

export const Details = () => <Form initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
    <Field name={'route'} />
    <Field name={'adults'} />
    <Field name={'children'} />
    <Field name={'pets'} />
    <Errors />
    <Submit />
</Form>  