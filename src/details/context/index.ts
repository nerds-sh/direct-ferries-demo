import { createContext, useContext as useReactContext, useState } from 'react'
import { FormikConfig, FormikValues, useFormik } from 'formik'
import { Types } from 'details/types'

type ContextType = {
    type: Types.Form,
    setType: (type: Types.Form) => void,
} & FormikValues

export const Context = createContext({} as ContextType)

export const useContext = ():ContextType => useReactContext(Context)

const useFormikInit = (): FormikConfig<FormikValues> => ({
  initialValues: { caca: 'pipi' },
  onSubmit: ({ caca }) => console.log(caca),
})

export const useDefaultContext = () => {
  const [type, setType] = useState(Types.Form.Return)
  const formik = useFormik(useFormikInit())

  return { ...formik, type, setType }
}

