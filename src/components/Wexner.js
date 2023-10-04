import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const questions = [
    {
        text: 'Frequency of bowel movements',
        choices: [
            { value: 0, label: '1-2 Times per 1-2 days' },
            { value: 1, label: '2 Times per week' },
            { value: 2, label: 'Once per week' },
            { value: 3, label: 'Less than once per week' },
            { value: 4, label: 'Less than once per month' }
        ]
    },
    {
        text: 'Difficulty: Painful evacuation effort',
        choices: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Ususally' },
            { value: 4, label: 'Always' }
        ]
    },
    {
        text: 'Completeness: Feeling incomplete evacuation',
        choices: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Ususally' },
            { value: 4, label: 'Always' }
        ]
    },
    {
        text: 'Failure: Unsuccessful attempts at evacuation per 24 hours',
        choices: [
            { value: 0, label: 'Never' },
            { value: 1, label: '1-3' },
            { value: 2, label: '3-6' },
            { value: 3, label: '6-9' },
            { value: 4, label: 'More than 9' }
        ]
    },
    {
        text: 'Pain: Abdominal',
        choices: [
            { value: 0, label: 'Never' },
            { value: 1, label: 'Rarely' },
            { value: 2, label: 'Sometimes' },
            { value: 3, label: 'Ususally' },
            { value: 4, label: 'Always' }
        ]
    },
    {
        text: 'Time: minutes in lavatory per attempt',
        choices: [
            { value: 0, label: 'Less than 5' },
            { value: 1, label: '5-10' },
            { value: 2, label: '10-20' },
            { value: 3, label: '20-30' },
            { value: 4, label: 'More than 30' }
        ]
    },
    {
        text: 'History: Duration of constipation (year)',
        choices: [
            { value: 0, label: '0' },
            { value: 1, label: '1-5' },
            { value: 2, label: '5-10' },
            { value: 3, label: '10-20' },
            { value: 4, label: 'More than 20' }
        ]
    },
    {
        text: 'Assistance: Type of assistance',
        choices: [
            { value: 0, label: 'Without assistance' },
            { value: 1, label: 'Stimulative lexatives' },
            { value: 2, label: 'Digital assistance/enema' },
        ]
    }
]

function Wexner() {
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
                <p className='fs-4 text-center'>Wexner constipation score</p>
            </Row>
            <Row>
                <p className='fs-5 fw-bold'>ประเมินภาวะความรุนแรงของอาการท้องผูก</p>
            </Row>
            <Form>
                {questions.map((question, index) => (
                    <div className='radio-input-container' key={index}>
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
                                    {question.choices.map(choice => (
                                        <Form.Check
                                            key={choice.value}
                                            inline
                                            type='radio'
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
                <p className='fs-4'>score <span className='fs-3 fw-bold'>{computeTotalScore()}</span></p>
            </Row>
        </Container>
  )
}

export default Wexner