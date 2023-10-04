import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const questions = [
    {
        text: 'อายุเท่าไร',
        choices: [
            { value: 0, label: 'มากกว่าหรือเท่ากับ 70 ปี' },
            { value: 5, label: 'น้อยกว่า 70 ปี' }
        ]
    },
    {
        text: 'คุณได้รับการรักษาโดยการนอนโรงพยาบาลในช่วงปีที่ผ่านมาหรือไม่',
        choices: [
            { value: 0, label: 'รับการรักษาและมากกว่า 1 ครั้ง'},
            { value: 1, label: 'รับการรักษาเพียงครั้งเดียว'},
            { value: 2, label: 'ไม่ได้รับการรักษาในโรงพยาบาล'}
        ]
    },
    {
        text: 'ข้อใดเป็นระดับในการท่ากิจกรรมของคุณ',
        choices: [
            { value: 0, label: 'ฉันสามารถเดินได้น้อยกว่า 1,000 เมตร (1 กิโลเมตร)'},
            { value: 15, label: 'ฉันสามารถเดินได้มากกว่า 1,000 เมตร (1 กิโลเมตร)'}
        ]
    },
    {
        text: 'คุณรับประทานอาหาร 3 ม้ือเป็นประจ่าหรือไม่',
        choices: [
            { value: 0, label: 'ไม่ ฉันข้ามอาหารบางมื้อตั้งแต่ 2 ครั้งต่อสัปดาห์ขึ้นไป (เช่น ฉันไม่รับประทานอาหารเช้า หรือรับประทานเพียงกาแฟผสมนม หรือซุปสำหรับมื้อเย็น'},
            { value: 2, label: 'รับประทานอาหาร 3 มื้อเป็นประจ่า'}
        ]
    },
    {
        text: 'คุณน้ำหนักลดลงในช่วง 1 ปีที่ผ่านมาหรือไม่',
        choices: [
            { value: 0, label: 'ลดลงมากกว่า 2 กิโลกรัม'},
            { value: 10, label: 'ลดลงน้อยกว่าหรือเท่ากับ 2 กิโลกรัม'}
        ]
    }
]

function MSRA5() {
    const [answers, setAnswers] = useState({})

    const handleAnswerChange = (questionIndex, value) => {
        setAnswers({
            ...answers,
            [questionIndex]: parseInt(value)
        });
    };

    const computeTotalScore = () => {
        return Object.values(answers).reduce((total, answer) => total + answer, 0); // Sum the scores
    }
    return (
        <Container>
            <Row>
                <p className='fs-4 text-center'>Modified Mini Sarcopenia Risk Assessment-5</p>
            </Row>
            <Row>
                <p className='fs-5 fw-bold'>คัดกรองความเสี่ยงภาวะมวลกล้ามเนื้อน้อย</p>
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
                    </div>
                ))}
            </Form>
            <Row>
                <p className='fs-5'>{computeTotalScore()} คะแนน</p>
                <p className='fs-5 fw-bold'>แปลผล</p>
                {computeTotalScore() > 30 ? (
                    <p className='fs-6 text-success'>ไม่มีความเสี่ยงต่อภาวะมวลกล้ามเนื้อน้อย</p>
                ):(
                    <p className='fs-6 text-danger'>มีความเสี่ยงต่อภาวะมวลกล้ามเนื้อน้อย</p>
                )}
            </Row>
        </Container>
    )
}

export default MSRA5