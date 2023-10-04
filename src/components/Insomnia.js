import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const questions = [
    'ในช่วง 1 เดือนที่ผ่านมาท่านพยายามนอนแต่ไม่ค่อยหลับ',
    'ในช่วง 1 เดือนที่ผ่านมาเมื่อท่านตื่นขึ้นกลางดึกแล้ว พยายามนอนต่อแต่กลับไม่หลับ',
    'ในช่วง 1 เดือนที่ผ่านมาท่านตื่นเร็วเกินไป',
    'ความพึงพอใจ/กับสภาพการนอนในปัจจุบัน',
    'ปัญหาการนอนไม่หลับของท่านมีผลต่อการดำเนินชีวิตประจำวันในระดับไหน',
    'การนอนไม่หลับส่งผลต่อการดำเนินชีวิตของท่านนั้น จนคนอื่นๆ สังเกตเห็นได้',
    'ท่านรู้สึกกังวลหรือหดหู่แค่ไหนกับการนอนไม่หลับ'
]


function Insomnia() {
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
                <p className='text-center fs-4'>Insomnia severity index</p>
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
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={0} label='ไม่มี' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={1} label='เล็กน้อย' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={2} label='ปานกลาง' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={3} label='รุนแรง' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' name={`9Q${index + 1}`} value={4} label='รุนแรงมาก' onChange={InputScore(index)}/>
                        </div>
                    </Col>
                </Row>
            ))}
            </Form>
            <Row>
                <p className='fs-4'>score <span className='fs-3 fw-bold'>{totalScore}</span></p>
                <p className='fs-5 fw-bold'>แปลผล</p>
                { showResults ? (
                    totalScore >= 22 ? (
                        <p className='text-danger'>มีอาการนอนไม่หลับระดับ<span className='fw-bold'> รุนแรง</span></p>
                    ): totalScore >= 15 ? (
                        <p className='text-warning'>มีอาการนอนไม่หลับระดับ<span className='fw-bold'> ปานกลาง</span></p>
                    ): totalScore >= 8 ? (
                        <p className='text-primary'>อยู่ในระยะเริ่มของการมีอาการนอนไม่หลับ</p>
                    ): (
                        <p className='text-success'>ผู้ป่วยไม่มีอาการนอนไม่หลับเลย</p>
                    )
                ) : null }
            </Row>
        </Container>
  )
}

export default Insomnia