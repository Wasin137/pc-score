import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const questions = [
    'รู้สึกตึงเครียด วิตกกังวล หรือ กระวนกระวาย',
    'ไม่สามารถหยุดหรือควบคุมความกังวลได้',
    'กังวลมาเกินไปในเรื่องต่างๆ',
    'ทำตัวให้ผ่อนคลายได้ยาก',
    'รู้สึกกระสับกระส่ายจนไม่สามารถนั่งนิ่งๆ ได้',
    'กลายเป็นคนขี้รำคาญ หรือ หงุดหงิดง่าย',
    'รู้สึกกลัวเหมือนว่าจะมีอะไรร้ายๆ เกิดขึ้น'
]

function Anxiety() {
    const [scores, setScores] = useState(Array(9).fill(0));
    const [showResults, setShowResults] = useState(false)

    const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

    const InputScore = (index) => (event) => {
        const score = parseInt(event.target.value, 10);
        const updatedScores = [...scores];
        updatedScores[index] = score;
        setScores(updatedScores);
        setShowResults(true);
    };
    return (
        <Container>
            <Row>
                <p className='text-center fs-4'>GAD-7</p>
                <p className='fs-6'>Generalized anxiety disorder 7-items ประเมินภาวะวิตกกังวลในช่วง <span className='fw-bold'>2 สัปดาห์</span>ที่ผ่านมา</p>
            </Row>
            <Form>
            {questions.map((question, index) => (
                <Row key={index} className='justify-content-center'>
                    <Col xs={1}>
                        <p className='text-end'>{index + 1}</p>
                    </Col>
                    <Col xs={5}>
                        <p className='text-start'>{question}</p>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={0} label='ไม่เลย' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={1} label='บางวัน' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={2} label='เกินกว่า 7 วัน' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={3} label='เกือบทุกวัน' onChange={InputScore(index)}/>
                        </div>
                    </Col>
                </Row>
            ))}
            </Form>
            <Row>
                <p className='fs-4'>score <span className='fs-3 fw-bold'>{totalScore}</span></p>
                <p className='fs-5 fw-bold'>แปลผล</p>
                { showResults ? (
                    totalScore >= 15 ? (
                        <p className='text-danger'>มีอาการวิตกกังวลระดับสูง<span className='fw-bold'> Severe anxiety</span></p>
                    ): totalScore >= 10 ? (
                        <p className='text-warning'>มีอาการวิตกกังวลระดับปานกลาง<span className='fw-bold'> Moderate anxiety</span></p>
                    ): totalScore >= 5 ? (
                        <p className='text-primary'>มีอาการวิตกกังวลระดับต่ำ<span className='fw-bold'> Mild anxiety</span></p>
                    ): (
                        <p className='text-success'>ไม่มีอาการหรือมีอาการวิตกกังวลระดับเล็กน้อย<span className='fw-bold'> Minimal anxiety</span></p>
                    )
                ) : null }
            </Row>
        </Container>
    )
}

export default Anxiety