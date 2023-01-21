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
                        <br />I am a junior software developer and learning new things about coding everyday! An aspiring Software Developer with a focus on frontend languages. While still newer to the coding atmosphere, I have a drive to constantly learn and improve upon my own knowledge of each language, and will translate that same attitude to the work space.
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

                    {/* <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">N.Le</footer> */}
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;