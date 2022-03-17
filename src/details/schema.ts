import * as yup from 'yup'

export const schema = yup.object().shape({
    route: yup.string().required(),
    adults: yup.number().required(),
    children: yup.number()
        .when('adults', {
            is: (adults: any) => adults > 0,
            then: adultsSchema => adultsSchema.min(0, 'Must be greater than 0') 
        }),
    pets: yup.number()
})