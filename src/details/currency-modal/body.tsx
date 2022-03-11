import { Form, Modal } from 'react-bootstrap'
import { currencies } from 'details/common'
import { Option } from 'details/currency-modal/option'
import React from 'react'

export const Body = () => <Modal.Body>
  <Form>
    {currencies.map((option, index) => <Option option={option} key={index} />)}
  </Form>
</Modal.Body>