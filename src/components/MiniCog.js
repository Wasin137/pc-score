import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function MiniCog() {
    const [scores, setScores] = useState([0, 0, 0])
    const [showResults, setShowResults] = useState(false)

    const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

    const InputScore = (index) => (event) => {
        const score = (index === 0 && event.target.checked) ? 2 : (event.target.checked ? 1 : 0);
        const updatedScores = [...scores];
        updatedScores[index] = score;
        setScores(updatedScores);
        setShowResults(true)
    }

    const InterpreteScore = (score) => {
        if (score <= 3) {
            return <p className='text-danger fw-bold'>มีภาวะการรู้คิดบกพร่อง (cognitive impairment)</p>;
        } else {
            return <p className='text-success'>ปกติ</p>;
        }
    };

    return (
        <Container>
            <Row>
                <p className='text-center fs-4'>Mini Cog</p>
            </Row>
            <Form>
                <Row>
                    <p className='fs-5'><span className='fw-bold'>1. Three word registration</span></p>
                    <p className='fs-6'>ผู้ทดสอบบอกผู้ถูกทดสอบว่า “ให้ตั้งใจฟังดีๆ เดี๋ยวจะบอกค่า 3 ค่า เมื่อพูดจบ แล้วให้พูดตามและจ่าไว้ เดี๋ยวจะกลับมาถามซ้่า”</p>
                </Row>
                <Row>
                    <div>
                        <Form.Check inline type='checkbox' label='หลานสาว'/>
                        <Form.Check inline type='checkbox' label='สวรรค์'/>
                        <Form.Check inline type='checkbox' label='ภูเขา'/>
                    </div>
                </Row>
                <Row className='mt-1'>
                    <p className='fs-5'><span className='fw-bold'>2. Clock drawing (2 คะแนน)</span></p>
                    <p className='fs-6'>ให้ผู้ถูกทดสอบวาดรูปนาฬิกาโดยใส่ตัวเลขและเข็มนาฬิกาที่เวลา 11.10 น.</p>
                </Row>
                <Row>
                    <Form.Check type='switch' label='สามารถวาดได้ถูกต้อง' id='clock' onChange={InputScore(0)}/>
                </Row>
                <Row className='mt-1'>
                    <p className='fs-5'><span className='fw-bold'>3. Three word recall (3 คะแนน)</span></p>
                    <p className='fs-6'>ให้ผู้ถูกทดสอบบอกค่า 3 ค่าที่ให้จ่าเมื่อสักครู่ว่ามีอะไรบ้าง</p>
                </Row>
                <Row>
                    <div>
                        <Form.Check inline type='checkbox' label='หลานสาว' id='threeWord1' onChange={InputScore(1)}/>
                        <Form.Check inline type='checkbox' label='สวรรค์' id='threeWord2' onChange={InputScore(2)}/>
                        <Form.Check inline type='checkbox' label='ภูเขา' id='threeWord3' onChange={InputScore(3)}/>
                    </div>
                </Row>
                {showResults ? (
                    <Row>
                        <p className='text-start'>คะแนน {totalScore} แปลผล {InterpreteScore(totalScore)}</p>
                    </Row>
                ): null}
            </Form>
        </Container>
    )
}

export default MiniCog