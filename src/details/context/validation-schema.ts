import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  adults: yup.number().min(1, 'Must add at least one passenger')
    .required('Required'),
  children: yup.number().min(0, 'Must be positive')
    .required('Required'),
})
