import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, my name is <span className="purple">Nicholas Le,  </span>
                        based in <span className="purple"> Tacoma, WA.</span>
                        <br />I am a junior software developer with a passion for learning
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Volleyball
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Stress Coding
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">N.Le</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;