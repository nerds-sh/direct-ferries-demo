import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import { currencies } from 'src/details/common/currencies'
import { Option } from 'src/details/currency-modal/option'

export const Body = () => <Modal.Body>
  <Form>
    {currencies.map((option, index) => <Option option={option} key={index} />)}
  </Form>
</Modal.Body>
