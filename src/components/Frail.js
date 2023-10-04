import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import FrailQ4 from './FrailQ4'
import FrailQ5 from './FrailQ5'

const questions = [
    {
        text: 'ในช่วง 4 สัปดาห์ที่ผ่านมา ท่านรู้สึกอ่อนเพลียบ่อยมากแค่ไหน',
        choices: [
            { value: 1, label: 'ตลอดเวลา' },
            { value: 1, label: 'เกือบตลอดเวลา' },
            { value: 0, label: 'บางเวลา'},
            { value: 0, label: 'ส่วนน้อย'},
            { value: 0, label: 'ไม่เคยเลย'}
        ]
    },
    {
        text: 'เวลาท่านเดินขึ้นบันได10ข้ันด้วยตัวเองโดยไม่หยุดพัก และไม่ใช้อุปกรณ์ช่วย ท่านมีปัญหาหรือไม่',
        choices: [
            { value: 0, label: 'ไม่มี'},
            { value: 1, label: 'มี'}
        ]
    },
    {
        text:'เวลาท่านเดิน300-400เมตรด้วยตัวเองโดยไม่หยุดพัก และไม่ใช้อุปกรณ์ช่วย ท่านมีปัญหาหรือไม่',
        choices: [
            { value: 0, label: 'ไม่มี'},
            { value: 1, label: 'มี'}
        ]
    }
]

function Frail() {
    const [answers, setAnswers] = useState({})

    const handleAnswerChange = (questionIndex, value) => {
        setAnswers({
            ...answers,
            [questionIndex]: parseInt(value)
        });
    };

    const handleAnswerChangeForQ4 = (score) => {
        setAnswers({
            ...answers,
            3: score
        });
    };

    const handleAnswerChangeForQ5 = (score) => {
        setAnswers({
            ...answers,
            4: score
        })
    }

    const computeTotalScore = () => {
        return Object.values(answers).reduce((total, answer) => total + answer, 0); // Sum the scores
    }
  return (
    <Container>
            <Row>
                <p className='fs-4 text-center'>FRAIL scale</p>
            </Row>
            <Row>
                <p className='fs-5 fw-bold'>คัดกรองภาวะเปราะบาง</p>
            </Row>
            <Form>
                {questions.map((question, index) => (
                    <div key={index}>
                        <Row>
                            <Col xs={1}>
                                <p className='fs-6 text-end fw-bold'>{index + 1}.</p>
                            </Col>
                            <Col>
                                <p className='fs-6 fw-bold'>{question.text}</p>
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col xs={1}></Col>
                            <Col>
                                <div>
                                    {question.choices.map((choice, choiceIndex) => (
                                        <Form.Check
                                            key={choice.value}
                                            inline
                                            type='radio'
                                            id={`Q${index + 1}Choice${choiceIndex}`}
                                            name={`Q${index + 1}`}
                                            value={choice.value}
                                            label={choice.label}
                                            onChange={() => handleAnswerChange(index, choice.value)}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        {index === 2 && <FrailQ4 onAnswerChange={handleAnswerChangeForQ4} />}
                    </div>
                ))}
                <FrailQ5 q5score={handleAnswerChangeForQ5}/>
            </Form>
            <Row>
                <p className='fs-5'>{computeTotalScore()} คะแนน</p>
                <p className='fs-5 fw-bold'>แปลผล</p>
                {computeTotalScore() >= 3 ? (
                    <p className='fs-6 text-danger'>มีภาวะเปราะบาง</p>

                ):(
                    <p className='fs-6 text-success'>ไม่มีภาวะเปราะบาง</p>
                )}
            </Row>
        </Container>
  )
}

export default Frail