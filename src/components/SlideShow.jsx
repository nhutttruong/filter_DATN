import { useState } from "react";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import UnfollowIcon from "./../assets/imgs/unfollow.png";
import FollowIcon from "./../assets/imgs/follow.png";
import TimeIcon from "./../assets/imgs/time.png";
import LocationIcon from "./../assets/imgs/location.png";
import PrevIcon from "./../assets/imgs/control_prev.png";
import NextIcon from "./../assets/imgs/control_next.png";
const test = [
  {
    con_id: 1,
    acronym: "KDD",
    con_name:
      "ACM International Conference on Knowledge Discovery and Data Mining",
    location: "Vietnam",
    update_time: "22/11/2023",
    follow: false,
  },
  {
    con_id: 2,
    acronym: "KDD",
    con_name:
      "ACM International Conference on Knowledge Discovery and Data Mining",
    location: "Vietnam",
    update_time: "22/11/2023",
    follow: true,
  },
  {
    con_id: 3,
    acronym: "KDD",
    con_name:
      "ACM International Conference on Knowledge Discovery and Data Mining",
    location: "Vietnam",
    update_time: "22/11/2023",
    follow: false,
  },
  {
    con_id: 4,
    acronym: "KDD",
    con_name:
      "ACM International Conference on Knowledge Discovery and Data Mining",
    location: "Vietnam",
    update_time: "22/11/2023",
    follow: true,
  },
  {
    con_id: 5,
    acronym: "KDD",
    con_name:
      "ACM International Conference on Knowledge Discovery and Data Mining",
    location: "Vietnam",
    update_time: "22/11/2023",
    follow: false,
  },
];

const customButtonStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
};

const properties = {
  prevArrow: (
    <Button className="custom_button_slideshow custom_button_prev">
      <Image
        src={PrevIcon}
        style={{ width: "20px" }}
        fluid
        className="position-absolute"
      />
    </Button>
  ),

  nextArrow: (
    <Button className="custom_button_slideshow">
      <Image src={NextIcon} style={{ width: "20px" }} />
    </Button>
  ),
};
const SlideShow = () => {
  const [listEvents, setListEvents] = useState(test);
  console.log(listEvents);
  return (
    <Container
      className=" rounded-5 p-4 mt-5"
      style={{
        height: "300px",
        backgroundColor: "#F3FCFB",
        width: "1260px",
        borderRadius: "20px",
      }}
    >
      <h3>Upcoming Event</h3>

      <div className="m-4">
        <Slide
          slidesToScroll={2}
          slidesToShow={2}
          indicators={false}
          {...properties}
          autoplay={false}
        >
          {listEvents.map((event) => (
            <Card
              key={event.con_id}
              className="p-3 rounded-4 my-slider-card border-0 "
              style={{
                backgroundColor: "#ffff",
                borderRadius: "20px",
                height: "190px",
                width: "580px",
              }}
            >
              <Row className="d-flex align-items-center justify-content-center">
                <Col
                  md={4}
                  className="bg-white rounded-4 h1 fw-bolder d-flex 
                  align-items-center justify-content-center ml-4 my-4"
                  style={{
                    width: "120px",
                    height: "120px",
                    marginLeft: "30px",
                    border: " 1px solid #4EB1A4",
                    color: "#1E4540",
                  }}
                >
                  {event.acronym}
                </Col>
                <Col md={7} className="">
                  <Card.Body className="">
                    <Card.Title
                      style={{
                        width: "358px",
                        height: "44px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontFamily: "Roboto",
                        fontSize: "20px",
                        fontStyle: "bold",
                      }}
                    >
                      {event.con_name}
                    </Card.Title>
                    <Card.Text
                      className="d-flex align-items-center mb-1"
                      style={{ fontFamily: "Roboto", fontSize: "20px" }}
                    >
                      <Image
                        src={TimeIcon}
                        className="me-3"
                        style={{ width: "20px" }}
                      />
                      {event.update_time}
                    </Card.Text>
                    <Card.Text
                      className="d-flex align-items-center"
                      style={{ fontFamily: "Roboto", fontSize: "20px" }}
                    >
                      <Image
                        src={LocationIcon}
                        className="me-3"
                        style={{ width: "18px" }}
                      />
                      {event.location}
                    </Card.Text>
                  </Card.Body>
                </Col>

                <Col className="d-flex align-items-end justify-content-end h-100 p-3">
                  <Button
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#C2F1EB",
                      height: "40px",
                      width: "37px",
                      border: "none",
                    }}
                  >
                    <Image
                      src={event.follow ? FollowIcon : UnfollowIcon}
                      style={{
                        height: "20px",
                        width: "17px",
                      }}
                    />
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Slide>
      </div>
    </Container>
  );
};

export default SlideShow;
