import { createContext, useContext as useReactContext, useState } from 'react'
import { FormikConfig, FormikValues, useFormik } from 'formik'
import { Form, Modal, Currency } from 'details/types'

type ContextType = {
    type: Form,
    setType: (type: Form) => void,
    modal: Modal,
    setModal: (modal: Modal) => void
} & FormikValues

export const Context = createContext({} as ContextType)

export const useContext = ():ContextType => useReactContext(Context)

const useFormikInit = (): FormikConfig<FormikValues> => ({
  initialValues: { search: '', currency: Currency.USD },
  onSubmit: ({ search }) => console.log('search is ', search),
})

export const useDefaultContext = () => {
  const [type, setType] = useState(Form.Return)
  const [modal, setModal] = useState(Modal.None)
  const formik = useFormik(useFormikInit())

  return { ...formik, type, setType, modal, setModal }
}

