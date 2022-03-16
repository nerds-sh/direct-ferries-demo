import { Form, Modal, Currency } from 'src/details/types'
import { FormikConfig, FormikValues, useFormik } from 'formik'
import { validationSchema } from 'src/details/context/validation-schema'
import { createContext, useContext as useReactContext, useState } from 'react'

type ContextType = {
    type: Form,
    setType: (type: Form) => void,
    modal: Modal,
    setModal: (modal: Modal) => void
} & FormikValues

export const Context = createContext({} as ContextType)

export const useContext = (): ContextType => useReactContext(Context)

const useFormikConfigs = (): FormikConfig<FormikValues> => ({
  initialValues: { search: '', currency: Currency.USD, adults: 2, children: 0 },
  onSubmit: ({ search }) => console.log('search is ', search),
  validationSchema,
})

export const useValue = () => {
  const [type, setType] = useState(Form.Return)
  const [modal, setModal] = useState(Modal.None)
  const formikConfigs = useFormik(useFormikConfigs())

  return { ...formikConfigs, type, setType, modal, setModal }
}

