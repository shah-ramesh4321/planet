import React, {useState} from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { ethers } from "ethers";
import { accountAtom, containsTokenAtom, metamaskPresentAtom, v1DetailsAtom } from "../store/auth";

import Background from "../assets/images/background.png";
import ArcadePlanetImg from "../assets/images/ArcadePlanet.png";
import Arcade from "../assets/images/ARCADE1.png";
import KittyBank from "../assets/images/KittyBank1.png";
import BankPlanetImg from "../assets/images/BankPlanet.png";
import Bifrost from "../assets/images/Bifrost.png";
import BifrostPlanetImg from "../assets/images/BifrostPlanet.png";
import NoTokensFoundDialog from "../modals/NoTokensFoundDialog";


const Home = () => {
  const v1Details = useRecoilValue(v1DetailsAtom);
  const [account, setAccount] = useRecoilState(accountAtom);
  const [metamaskPresent, setMetamaskPresent] = useRecoilState(metamaskPresentAtom);
  const [ containsToken , setContainsToken] = useRecoilState(containsTokenAtom);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleArcadeClick = async () => {
    if(metamaskPresent) {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      if(account) {
        const contract = new ethers.Contract(v1Details.contract_address, v1Details.contract_abi, provider);
        let balance = await contract.balanceOf(account);
        if(parseInt(balance.toString()) > 0){
          setContainsToken(parseInt(balance.toString()) > 0);
          setShow(true);
        } else {
          setOpen(true);
        }


      } else {
        // setAccounts()
        const signer = provider.getSigner();
        setAccount(await signer.getAddress());

      }

    } else {
      setMetamaskPresent((prev) => false)
    }
  }
  return (
    <>
    <Container
      className="root"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row className="justify-content-center">
        <Col md="4" sm="12">
          <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
                <img className="planet-name" src={Arcade} alt="arcade" />
            </div>
          </div>
          <div className="planet-div" onClick={handleArcadeClick}>
            <img
              className="zoom"
              data-bs-toggle="tooltip" data-bs-placement="right" title="Holders Only"
              style={{ cursor: "pointer" }}
              src={ArcadePlanetImg}
              alt="arcadeImg"
            />
          </div>
         </Col>
        <Col md="4" sm="12">
        <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
            <img className="planet-name" src={KittyBank} alt="arcade" />
            </div>
          </div>
          <div className="planet-div">
            {/* <Link to="/1"> */}
            <img className="zoom" src={BankPlanetImg} alt="kitty"/>
            {/* </Link> */}
          </div>
        </Col>
        <Col md="4" sm="12">
        <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
            <img className="planet-name" src={Bifrost}  alt="bifrost" />
            </div>
          </div>
          <div className="planet-div">
            <img className="zoom" src={BifrostPlanetImg} alt="bifrostplanet"/>
          </div>
        </Col>
      </Row>

    </Container>
    <NoTokensFoundDialog open={open} onClose={() => setOpen(false)}/>
    <Modal
    show={show && containsToken}
    fullscreen={true}
    onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
              Unity GL
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <iframe className="" style={{ height: "100vh", width: "100%" }} src="http://jackpott.in/New%20folder/"></iframe>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Home;
