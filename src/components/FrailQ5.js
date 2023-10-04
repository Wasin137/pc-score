import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'

function FrailQ5({ q5score }) {
    const [priorWeight, setPriorWeight] = useState(0)
    const [weight, setWeight] = useState(0)

    const InputWeight = (event) =>{
        setWeight(event.target.value)
    }

    const InputPriorWeight = (event) => {
        setPriorWeight(event.target.value)
    }

    useEffect(() => {
        const score = priorWeight >= weight ? 0 : (
            (priorWeight - weight)/priorWeight < 0.05 ? 0 : 1
        )
        q5score(score);
    }, [priorWeight, weight, q5score]);

  return (
    <>
        <Row>
            <Col xs={1}>
                <p className='fs-6 text-end fw-bold'>5.</p>
            </Col>
            <Col>
                <p className='fs-6 fw-bold'>น้ำหนักในช่วง 1 ปีที่ผ่านมา</p>
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col xs={1}></Col>
            <Col xs={5} md={3}>
                <Form.Label>น้ำหนักปัจจุบัน (ไม่สวมรองเท้า)</Form.Label>
                <Form.Control type='number' placeholder='ระบุน้ำหนักเป็น kg.' onChange={InputWeight} />
            </Col>
            <Col xs={5} md={3}>
                <Form.Label>น้ำหนัก 1 ปีก่อน (ไม่สวมรองเท้า)</Form.Label>
                <Form.Control type='number' placeholder='ระบุน้ำหนักเป็น kg.'onChange={InputPriorWeight} />
            </Col>
        </Row>
    </>
  )
}

export default FrailQ5