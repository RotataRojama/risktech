import React from 'react';
import freshman from './assets/businessman-leader-modern-office-with-businesspeople-working-PhotoRoom (1) 1.png';
import { Row, Col } from 'antd';
import './fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Bodypage1() {
    return (
        <>
            <Row>
                <Col span={12}><img className='fresh' src={freshman} alt='background image' /></Col>
                <Col span={12}>
                    <div className='fresh-text1'>Your sit on this board begins with this test</div>
                    <div className='fresh-text2'>Many organisations are looking for qualified and experienced professionals
                        for their boards. Professionals are also looking for a seat on the board.
                        We are building an amazing tool that will bridge the gap. Thank you for
                        agreeing to test the future of board recruitments in Africa</div>
                    <div className='fresh-text3'>By filling the form, you agree to participate in the test. Please provide the
                        required details to enable us create your test account.
                        We also encourage you to take the anonymous survey after the test, the information
                        you provide will help us build a platform that adequately meets your needs.</div>
                    <div className='fresh-button'>Take the Test</div>
                    <div className='fresh-icons'>
                        <div className='fresh-icons1'><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className='fresh-icons2'><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='fresh-icons3'><FontAwesomeIcon icon={faInstagram} /></div>    
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Bodypage1