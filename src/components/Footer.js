import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { EnvelopeAt } from 'react-bootstrap-icons'

function Footer() {
  return (
    <Container fluid style={{ borderTop: '1px solid #D0D0D0'}}>
        <Row className='mt-3'>
            <p className='text-center'>อยู่ระหว่างการทดสอบ: หากมีข้อแนะนำ-ติชมสามารถติดต่อ <EnvelopeAt/> wasin.kamp@gmail.com</p>
        </Row>
    </Container>
  )
}

export default Footer