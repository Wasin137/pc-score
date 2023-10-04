import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Mdd9Q() {
    const questions = [
        'เบื่อไม่สนใจอยากทำอะไร',
        'ไม่สบายใจ ซึมเศร้า ท้อแท้',
        'หลับยาก หรือ หลับๆ ตื่นๆ หรือ หลับมากไป',
        'เหนื่อยง่าย หรือ ไม่ค่อยมีแรง',
        'เบื่ออาหาร หรือ กินมากเกินไป',
        'รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือทำให้ตนเองหรือครอบครัวผิดหวัง',
        'สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ',
        'พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตได้ หรือ กระสับกระส่ายไม่สามารถอยู่นิ่งได้ดเหมือนที่เคยเป็น',
        'คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี'
    ]

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
                <p className='text-center fs-4'>คัดกรองโรคซึมเศร้า 9Q</p>
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
                            <Form.Check inline type='radio' id={`9Q${index + 1}c1`} name={`9Q${index + 1}`} value={0} label='ไม่มี' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' id={`9Q${index + 1}c2`} name={`9Q${index + 1}`} value={1} label='1-7 วัน' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' id={`9Q${index + 1}c3`} name={`9Q${index + 1}`} value={2} label='> 7 วัน' onChange={InputScore(index)}/>
                            <Form.Check inline type='radio' id={`9Q${index + 1}c4`} name={`9Q${index + 1}`} value={3} label='ทุกวัน' onChange={InputScore(index)}/>
                        </div>
                    </Col>
                </Row>
            ))}
            </Form>
            <Row>
                <p className='fs-4'>score <span className='fs-3 fw-bold'>{totalScore}</span></p>
                <p className='fs-5 fw-bold'>แปลผล</p>
                { showResults ? (
                    totalScore >= 19 ? (
                        <p className='text-danger'>มีอาการเศร้าระดับ<span className='fw-bold'> รุนแรง</span></p>
                    ): totalScore >= 13 ? (
                        <p className='text-warning'>มีอาการเศร้าระดับ<span className='fw-bold'> ปานกลาง</span></p>
                    ): totalScore >= 7 ? (
                        <p className='text-primary'>มีอาการเศร้าระดับ<span className='fw-bold'> น้อย</span></p>
                    ): (
                        <p className='text-success'>ไม่มีอาการ หรือมีอาการซึมเศร้าระดับน้อย</p>
                    )
                ) : null }
            </Row>
        </Container>
    )
}

export default Mdd9Q