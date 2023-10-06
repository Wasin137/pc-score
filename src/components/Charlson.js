import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

import usePageViews from './usePageViews';

const questions = [
    {
        text: 'Age',
        choices: [
            { value: 0, label: '< 50 years'},
            { value: 1, label: '50-59 years'},
            { value: 2, label: '60-69 years'},
            { value: 3, label: '70-79 years'},
            { value: 4, label: '80-89 years'},
            { value: 5, label: '90-99 years'}
        ]
    },
    {
        text: 'Myocardial infarction',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'CHF',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'Peripheral vascular disease',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'CVA or TIA',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'Dementia',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'COPD',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'Connective tissue disease',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'Peptic ulcer disease',
        choices: [
            { value: 0, label: 'No'},
            { value: 1, label: 'Yes'}
        ]
    },
    {
        text: 'Hemiplegia',
        choices: [
            { value: 0, label: 'No'},
            { value: 2, label: 'Yes'}
        ]
    },
    {
        text: 'Moderate to severe CKD',
        choices: [
            { value: 0, label: 'No'},
            { value: 2, label: 'Yes'}
        ]
    },
    {
        text: 'Leukemia',
        choices: [
            { value: 0, label: 'No'},
            { value: 2, label: 'Yes'}
        ]
    },
    {
        text: 'Lymphoma',
        choices: [
            { value: 0, label: 'No'},
            { value: 2, label: 'Yes'}
        ]
    },
    {
        text: 'AIDS',
        choices: [
            { value: 0, label: 'No'},
            { value: 6, label: 'Yes'}
        ]
    },
    {
        text: 'Liver disease',
        choices: [
            { value: 0, label: 'None'},
            { value: 1, label: 'Mild'},
            { value: 3, label: 'Moderate to severe'}
        ]
    },
    {
        text: 'Diabetes mellitus',
        choices: [
            { value: 0, label: 'None or diet-controlled'},
            { value: 1, label: 'Uncomplicated'},
            { value: 2, label: 'End-organ damage'}
        ]
    },
        {
        text: 'Solid tumor',
        choices: [
            { value: 0, label: 'None'},
            { value: 2, label: 'Localized'},
            { value: 6, label: 'Metastatic'}
        ]
    }
]

function Charlson() {
    const [answers, setAnswers] = useState({})

    const { views, loading } = usePageViews('cci');

    const handleAnswerChange = (questionIndex, value) => {
        setAnswers({
            ...answers,
            [questionIndex]: parseInt(value)
        });
    };

    const computeTotalScore = () => {
        return Object.values(answers).reduce((total, answer) => total + answer, 0)
    }
    const tenYearSurvivalRate = (score) => {
        return ((Math.pow(0.983, Math.exp(score * 0.9)))*100).toFixed(2)
    }
  return (
    <Container>
            <Row>
                <p className='fs-4 text-center'>Charlson Comorbidity Index (CCI)</p>
            </Row>
            <Row>
                <p className='fs-5 fw-bold'>Predicts 10-year survival in patients with multiple comorbidities.</p>
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
                <p className='fs-4'>score <span className='fs-3 fw-bold'>{computeTotalScore()}</span></p>
                <p className='fs-4'>Estimated 10-year survival <span className='fs-3 fw-bold'>{tenYearSurvivalRate(computeTotalScore())}</span> %</p>
            </Row>
            <Row>
                <p className='text-end fst-italic'>{loading ? "Loading viewed count..." : `This page has been viewed ${views} times.`}</p>
            </Row>
        </Container>
  )
}

export default Charlson