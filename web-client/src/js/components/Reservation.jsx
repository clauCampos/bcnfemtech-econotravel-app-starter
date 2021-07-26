import * as React from 'react';
import {Form} from 'react-bootstrap'

export const Reservation = (props) => {
  return (
      <div>
          <Form>
              <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted">
                      We'll never share your email address, trust us!
                  </Form.Text>
              </Form.Group>
          </Form>

      </div>

  )
}
