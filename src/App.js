import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import './App.css'

import usePageViews from './components/usePageViews';

import ImgMdd from './assets/mdd.jpg'
import ImgMiniCog from './assets/minicog.jpg'
import ImgNutritionShort from './assets/nutritionshort.jpg'
import ImgMSRA5 from './assets/msra5.jpg'
import ImgCCI from './assets/cci.jpg'
import ImgWexner from './assets/wexner.jpg'
import ImgInsomnia from './assets/insomnia.jpg'
import ImgAnxiety from './assets/anxiety.jpg'

const cardData = [
  {
    img: ImgMdd,
    title: '2Q, 9Q',
    text: 'แบบคัดกรองโรคซึมเศร้า สอบถามผู้ป่วยในช่วง 2 สัปดาห์ที่ผ่านมา',
    keywords: 'mdd, depress, depression',
    link: '/mdd'
  },
  {
    img: ImgMiniCog,
    title: 'Mini Cog',
    text: 'แบบคัดกรองภาวะ Cognitive impairment (แบบย่อ)',
    keywords: 'เรียนรู้, สมอง, สูงอายุ, elderly',
    link: '/minicog'
  },
  {
    img: ImgNutritionShort,
    title: 'Mini Nutritional Assessment (Short form)',
    text: 'แบบคัดกรองภาวะโภชนาการในผู้สูงอายุ',
    keywords: 'สารอาหาร, elderly',
    link: '/mnashort'
  },
  {
    img: ImgMSRA5,
    title: 'Modified Mini Sarcopenia Risk Assessment-5',
    text: 'แบบคัดกรองความเสี่ยงต่อภาวะมวลกล้ามเนื้อน้อย',
    keywords: 'กล้ามเนื้อลีบ, กล้ามเนื้อ, สูงอายุ, elderly',
    link: '/msra5'
  },
  {
    img: ImgCCI,
    title: 'Charlson Comorbidity Index (CCI)',
    text: 'Predicts 10-year survival in patients with multiple comorbidities.',
    keywords: 'comorbid, disease, underlying, prediction',
    link: '/cci'
  },
  {
    img: ImgWexner,
    title: 'Wexner constipation score',
    text: 'Severity of constipation.',
    keywords: 'ท้องผูก, ขับถ่าย',
    link: '/wexner'
  },
  {
    img: ImgInsomnia,
    title: 'Insomnia severity index (ISI)',
    text: 'Severity of insomnia',
    keywords: 'นอนไม่หลับ, นอน',
    link: '/insomnia'
  },
  {
    img: ImgAnxiety,
    title: 'GAD-7',
    text: 'Generalized anxiety disorder 7-items คัดกรองภาวะวิตกกังวล',
    keywords: 'วิตกกังวล, คัดกรอง',
    link: '/anxiety'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const { views, loading } = usePageViews('index');

  const filteredCards = cardData.filter(card => 
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    card.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.keywords.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <Container className='mt-3'>
      <Row>
        <p className='fs-5'>Search/Filter</p>
      </Row>
      <Row className='mb-3'>
        <Col>
          <Form.Group controlId="searchForm">
              <Form.Control 
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </Form.Group>
        </Col>
      </Row>
      <Row className='d-flex'>
        {filteredCards.map((card, index) => (
          <Col xs={12} md={4} className='p-2' key={index}>
            <Card className='d-flex flex-column h-100'>
              <Card.Img variant="top" src={card.img} className="equal-img-height"/>
              <Card.Body className="flex-grow-1 d-flex flex-column">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text className='flex-grow-1'>
                  {card.text}
                </Card.Text>
                <Button variant="primary" as='a' href={card.link}>แบบประเมิน</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <p className='text-end fst-italic'>{loading ? "Loading viewed count..." : `This page has been viewed ${views} times.`}</p>
      </Row>
    </Container>
  )
}

export default App
