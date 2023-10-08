import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import usePageViews from './usePageViews';


const questions = [
    {
        text: 'Over the past month, how often have you had a sensation of not emptying your bladder completely after you finish urinating? (Incompete emptying)',
        choices: [
            {value: 0, label:'Not at all'},
            {value: 1, label:'Less than 1 time in 5'},
            {value: 2, label:'Less Than Half The Time'},
            {value: 3, label:'About Half The Time'},
            {value: 4, label:'More Than Half The Time'},
            {value: 5, label:'Almost Always'}
        ]
    },
    {
        text: 'Over the past month, how often have you had to urinate again less than two hours after you have finished urinating? (Frequency)',
        choices: [
            {value: 0, label:'Not at all'},
            {value: 1, label:'Less than 1 time in 5'},
            {value: 2, label:'Less Than Half The Time'},
            {value: 3, label:'About Half The Time'},
            {value: 4, label:'More Than Half The Time'},
            {value: 5, label:'Almost Always'}
        ]
    },
    {
        text: 'Over the past month, how often have you found you stopped and started again several times when you urinated? (Intermittency)',
        choices: [
            {value: 0, label:'Not at all'},
            {value: 1, label:'Less than 1 time in 5'},
            {value: 2, label:'Less Than Half The Time'},
            {value: 3, label:'About Half The Time'},
            {value: 4, label:'More Than Half The Time'},
            {value: 5, label:'Almost Always'}
        ]
    },
    {
        text: 'Over the past month, how often have you found it difficult to postpone urination? (Urgency)',
        choices: [
            {value: 0, label:'Not at all'},
            {value: 1, label:'Less than 1 time in 5'},
            {value: 2, label:'Less Than Half The Time'},
            {value: 3, label:'About Half The Time'},
            {value: 4, label:'More Than Half The Time'},
            {value: 5, label:'Almost Always'}
        ]
    },
    {
        text: 'Over the last month, how often have you had a weak urinary stream? (Weak stream)',
        choices: [
            {value: 0, label:'Not at all'},
            {value: 1, label:'Less than 1 time in 5'},
            {value: 2, label:'Less Than Half The Time'},
            {value: 3, label:'About Half The Time'},
            {value: 4, label:'More Than Half The Time'},
            {value: 5, label:'Almost Always'}
        ]
    },
    {
        text: 'Over the past month, how often have you had to push or strain to begin urination? (Straining)',
        choices: [
            {value: 0, label:'Not at all'},
            {value: 1, label:'Less than 1 time in 5'},
            {value: 2, label:'Less Than Half The Time'},
            {value: 3, label:'About Half The Time'},
            {value: 4, label:'More Than Half The Time'},
            {value: 5, label:'Almost Always'}
        ]
    },
    {
        text: 'Over the past month how many times did you most typically get up each night to urinate from the time you went to bed until the time you got up in the morning? (Nocturia)',
        choices: [
            {value: 0, label:'None'},
            {value: 1, label:'Once'},
            {value: 2, label:'Twice'},
            {value: 3, label:'3 Times'},
            {value: 4, label:'4 Times'},
            {value: 5, label:'5 or more'}
        ]
    }
]

function IPSS() {
    const [answers, setAnswers] = useState({})

    const { views, loading } = usePageViews('ipss');

    const handleAnswerChange = (questionIndex, value) => {
        setAnswers({
            ...answers,
            [questionIndex]: parseInt(value)
        });
    };

    const computeTotalScore = () => {
        return Object.values(answers).reduce((total, answer) => total + answer, 0)
    }

    return (
        <Container>
            <Row>
                <p className='fs-4 text-center'>International prostate symptom score (IPSS)</p>
            </Row>
            <Row>
                <p className='fs-5 fw-bold'>แบบประเมินอาการความรุนแรงต่อมลูกหมากโต</p>
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
                <p className='fs-5 fw-bold'>แปลผล</p>
                {computeTotalScore() >= 20 ? (
                    <p className='fs-6 text-danger'>Severely symptomatic</p>
                ):computeTotalScore() >= 8 ? (
                    <p className='fs-6 text-warning'>Moderately symptomatic</p>
                ):(
                    <p className='fs-6 text-success'>Mildly symptomatic</p>
                )}
            </Row>
            <Row>
                <p className='text-end fst-italic'>{loading ? "Loading viewed count..." : `This page has been viewed ${views} times.`}</p>
            </Row>
        </Container>
    )
}

export default IPSS