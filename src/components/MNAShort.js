import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const questions = [
    {
        text: 'ในช่วง 3 เดือนที่ผ่านมา รับประทานอาหารได้น้อยลงเนื่องจากความอยากอาหารลดลง มีปัญหาการย่อย การ เคี้ยว หรือปัญหาการกลืนหรือไม่',
        choices: [
            { value: 0, label: 'รับประทานอาหารน้อยลงอย่างมาก' },
            { value: 1, label: 'รับประทานอาหารน้อยลงปานกลาง' },
            { value: 2, label: 'รับประทานอาหารไม่เปลี่ยนแปลง' },
        ]
    },
    {
        text: 'ในช่วง 3 เดือนที่ผ่านมา น้ำหนักลดลงหรือไม่',
        choices: [
            { value: 0, label: 'น้ำหนักลดลงมากกว่า 3 กิโลกรัม' },
            { value: 1, label: 'ไม่ทราบ' },
            { value: 2, label: 'น้ำหนักลดลงระหว่าง 1-3 กิโลกรัม' },
            { value: 3, label: 'น้ำหนักไม่ลดลง' },
        ]
    },
    {
        text: 'สามารถเคลื่อนไหวได้เองหรือไม่',
        choices: [
            { value: 0, label: 'นอนบนเตียงหรือต้องอาศัยรถเข็นตลอดเวลา'},
            { value: 1, label: 'ลุกจากเตียงหรือรถเข็นได้บ้างแต่ไม่สามารถไปข้างนอกได้เอง'},
            { value: 2, label: 'เดินและเคลื่อนไหวได้ตามปกติ'}
        ]
    },
    {
        text: 'ใน 3 เดือนที่ผ่านมา มีความเครียดรุนแรงหรือป่วยเฉียบพลันหรือไม่',
        choices: [
            { value: 0, label: 'มี'},
            { value: 2, label: 'ไม่มี'}
        ]
    },
    {
        text: 'มีปัญหาทางจิตประสาท(Neuropsychologicalproblems)หรือไม่',
        choices: [
            { value: 0, label: 'ความจำเสื่อมหรือซึมเศร้าอย่างรุนแรง'},
            { value: 1, label: 'ความจำเสื่อมเล็กน้อย'},
            { value: 2, label: 'ไม่มีปัญหาทางประสาท'}
        ]
    },
    {
        text: 'ดัชนีมวลกาย(BMI)=น่้าหนักตัว(กก.)/[ส่วนสูง(ม.)2]',
        choices: [
            { value: 0, label: 'BMI น้อยกว่า 19'},
            { value: 1, label: 'BMI ตั้งแต่ 19 แต่น้อยกว่า 21'},
            { value: 2, label: 'BMI ตั้งแต่ 21 แต่น้อยกว่า 23'},
            { value: 3, label: 'BMI ตั้งแต่ 23 ขึ้นไป'}
        ]
    },
    {
        text: 'เส้นรอบวงน่อง (Calf circumference; CC) หน่วยเป็นเซนติเมตร',
        choices: [
            { value: 0, label: 'CC น้อยกว่า 31'},
            { value: 3, label: 'CC ตั้งแต่ 31 ขึ้นไป'}
        ]
    }
];

function MNAShort() {
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
                <p className='fs-4 text-center'>Mini Nutritional Assessment (Short Form)</p>
            </Row>
            <Row>
                <p className='fs-5 fw-bold'>การคัดกรองภาวะโภชนาการในผู้สูงอายุ</p>
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
                {computeTotalScore() >= 12 ? (
                    <p className='fs-6 text-success'>โภชนาการปกติ</p>
                ):computeTotalScore() >= 8 ? (
                    <p className='fs-6 text-warning'>เสี่ยงต่อภาวะขาดสารอาหาร</p>
                ):(
                    <p className='fs-6 text-danger'>ขาดสารอาหาร</p>
                )}
            </Row>
        </Container>
    )
}

export default MNAShort