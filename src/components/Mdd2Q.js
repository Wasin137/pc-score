import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import Mdd9Q from "./Mdd9Q";

function Mdd2Q() {
    const [scores, setScores] = useState([0, 0])
    const [showResults, setShowResults] = useState(false)

    const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

    const InputScore = (index) => (event) => {
        const score = event.target.checked ? 1 : 0;
        const updatedScores = [...scores];
        updatedScores[index] = score;
        setScores(updatedScores);
        setShowResults(true);
    }
    return (
        <Container>
            <Row>
                <p className='text-center fs-4'>คัดกรองโรคซึมเศร้า 2Q</p>
            </Row>
            <Form>
                <Row className='justify-content-center'>
                    <Col xs={2}>
                        <p className='text-end'>1</p>
                    </Col>
                    <Col>
                        <Form.Check type='switch' id={1} label='ท่านรู้สึกหดหู่เศร้าหรือท้อแท้สิ้นหวังหรือไม่' onChange={InputScore(0)}/>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={2}>
                        <p className='text-end'>2</p>
                    </Col>
                    <Col>
                        <Form.Check type='switch' id={2} label='ท่านรู้สึกเบื่อ ทำอะไรก็ไม่เพลิดเพลินหรือไม่' onChange={InputScore(1)}/>
                    </Col>
                </Row>
            </Form>
            <Row>
                { showResults ? (
                    totalScore > 0 ? (
                    <>
                        <p className='text-center'><span className='text-danger fw-bold'>ผิดปกติ</span> กรุณาทำแบบคัดกรอง 9Q</p>
                        <Mdd9Q />
                    </>
                ): (
                    <p className='text-center'>ปกติ</p>
                )):null}
            </Row>
        </Container>
    )
}

export default Mdd2Q