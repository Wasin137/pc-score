import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'

const choices = [
    {
        name: 'HT',
        label: 'โรคความดันโลหิตสูง'
    },
    {
        name: 'DM',
        label: 'โรคเบาหวาน'
    },
    {
        name: 'Cancer',
        label: 'โรคมะเร็ง (ไม่รวมมะเร็งผิวหนัง)'
    },
    {
        name: 'Chronic lung',
        label: 'โรคปอดเรื้อรัง'
    },
    {
        name: 'Cardio Vascular Disease',
        label: 'โรคหลอดเลือดหัวใจกำเริบ'
    },
    {
        name: 'HF',
        label: 'ภาวะหัวใจวาย'
    },
    {
        name: 'Asthma',
        label: 'โรคหอบหืด'
    },
    {
        name: 'Angina',
        label: 'อาการเจ็บแน่นหน้าอกจากโรคหลอดเลือดหัวใจ'
    },
    {
        name: 'Arthritis',
        label: 'ภาวะข้ออักเสบ'
    },
    {
        name: 'Cerebro Vascular Disease',
        label: 'โรคหลอดเลือดสมอง'
    },
    {
        name: 'Kidney',
        label: 'โรคไต'
    }
]

function FrailQ4({ onAnswerChange }) {
    const [checkedChoices, setCheckedChoices] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedChoices(prev => [...prev, value]);
        } else {
            setCheckedChoices(prev => prev.filter(item => item !== value));
        }
    };

    useEffect(() => {
        const score = checkedChoices.length > 4 ? 1 : 0;
        onAnswerChange(score);
    }, [checkedChoices, onAnswerChange]);

  return (
    <>
        <Row>
            <Col xs={1}>
                <p className='fs-6 text-end fw-bold'>4.</p>
            </Col>
            <Col>
                <p className='fs-6 fw-bold'>แพทย์เคยแจ้งว่าท่านมีโรคต่างๆเหล่านี้หรือไม่</p>
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col xs={1}></Col>
            <Col>
                <div>
                    {choices.map((choice, index) => (
                    <Form.Check
                        key={choice.name}
                        inline
                        type='checkbox'
                        name={choice.name}
                        value={choice.name}
                        label={choice.label}
                        onChange={handleCheckboxChange}
                    />
                    ))}
                </div>
            </Col>
        </Row>
    </>
  )
}

export default FrailQ4