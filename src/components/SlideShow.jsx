import { useState } from 'react';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import UnfollowIcon from './../assets/imgs/unfollow.png'
import FollowIcon from './../assets/imgs/follow.png'
import TimeIcon from './../assets/imgs/time.png'
import LocationIcon from './../assets/imgs/location.png'
import PrevIcon from './../assets/imgs/control_prev.png'
import NextIcon from './../assets/imgs/control_next.png'
const test = [
    {
        con_id: 1,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: false,

    },{
        con_id: 2,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: true,

    },
    {
        con_id: 3,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: false,

    },
    {
        con_id: 4,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: true,
    },
    {
        con_id: 5,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: false,

    },
    
]

const customButtonStyle = {
    width: '50px',
    height: "50px",
    borderRadius: "50%",
}

const properties = {
    prevArrow: <Button className='custom_button_slideshow custom_button_prev'>
                    <Image src={PrevIcon} style={{width: "20px"}} fluid className='position-absolute'/>
                </Button>,

    nextArrow: <Button className='custom_button_slideshow'>
                    <Image src={NextIcon} style={{width: "20px"}}/>
                </Button>
}
const SlideShow = () => {
    const [listEvents, setListEvents] = useState(test)
    console.log(listEvents)
  return (
    <Container className='bg-white rounded-5 p-4' style={{height: "300px"}} >
        <h3>Upcoming Event</h3>

        <div  className='m-4'>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={false} {...properties} autoplay={false}>
                {
                    listEvents.map((event)=>(
                        <Card key={event.con_id} className='p-3 rounded-4 my-slider-card border-0'>
                            <Row className='d-flex align-items-center justify-content-center'>
                                <Col md={4} className='bg-white rounded-4 h1 fw-bolder d-flex align-items-center justify-content-center ' style={{width: '140px', height:"140px"}}>
    
                                        {event.acronym}
                                   
                                </Col>
                                <Col md={7} className=''>
            
                                    <Card.Body className=''>
                                    <Card.Title>{event.con_name}</Card.Title>
                                    <Card.Text className='d-flex align-items-center mb-1'>
                                        <Image src={TimeIcon} className='me-3' style={{width: '20px'}}/>
                                        {event.update_time}
                                    </Card.Text>
                                    <Card.Text className='d-flex align-items-center'>
                                        <Image src={LocationIcon} className='me-3' style={{width: '18px'}}/>
                                        {event.location}
                                    </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col>
                                    <Button className='' style={{width: "30px"}}>
                                        <Image src={event.follow ? FollowIcon : UnfollowIcon}/>
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    ))
                }
            </Slide>
        </div>
    </Container>
  )
}

export default SlideShow