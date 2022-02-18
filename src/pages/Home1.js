import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "../assets/images/background.png";
import ArcadePlanetImg from "../assets/images/ArcadePlanet.png";
import Arcade from "../assets/images/ARCADE1.png";
import KittyBank from "../assets/images/KittyBank1.png";
import BankPlanetImg from "../assets/images/BankPlanet.png";
import Bifrost from "../assets/images/Bifrost.png";
import BifrostPlanetImg from "../assets/images/BifrostPlanet.png";

const Home1 = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div
                className="container"
                style={{
                    minHeight: "100vh",
                    minWidth: "100vw",
                    background: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="all-planet">
                    <div className="d-flex flex-column text-center">
                        <div className="">
                            <img className="planet-name" src={KittyBank} alt="arcade" />
                        </div>
                        <div className="planet-div">
                            <img className="zoom" src={BankPlanetImg} alt="kitty" />
                        </div>
                    </div>

                    <div className="d-flex flex-column text-center">
                        <div className="">
                            <img className="planet-name" src={Arcade} alt="arcade" />
                        </div>
                        <div className="planet-div">
                            <img
                                className="zoom"
                                data-bs-toggle="tooltip" data-bs-placement="right" title="Holders Only"
                                style={{ cursor: "pointer" }}
                                src={ArcadePlanetImg}
                                alt="arcadeImg"
                                onClick={() => setShow(true)}
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <div className="">
                            <img className="planet-name" src={Bifrost} alt="bifrost" />
                        </div>
                        <div className="planet-div">
                            <img className="zoom" src={BifrostPlanetImg} alt="bifrostplanet" />
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                fullscreen={true}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Unity GL
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe className="w-100" style={{ height: "100vh", width: "100vw" }} src="http://jackpott.in/New%20folder/"></iframe>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Home1;
