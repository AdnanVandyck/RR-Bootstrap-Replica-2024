import React from 'react'
import { Card, Form } from 'react-bootstrap'

function Background() {
    return (
        <Card style={{ width: "100%", minHeight: "428px" }} className="bg-dark text-black">
        <Card.Img style={{ height: "100%", width: "100%", position: "absolute" }} 
        src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card image"/>
        <Card.ImgOverlay>
        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                        Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address                           " />
                        </Form.Group>
                    </Form>

        </Card.ImgOverlay>
      </Card>
    )
}

export default Background