import React from 'react';
import { Row, Col } from 'antd';
import './fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Bodypage3() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <div className='wwa-text1'>Your seat on this board begins with this test</div>
                    <div className='wwa-text2'>Many organisations are looking for qualified and experienced professionals
                        for their boards. Professionals are also looking for a seat on the board.
                        We are building an amazing tool that will bridge the gap. Thank you for
                        agreeing to test the future of board recruitments in Africa</div>
                    <div className='wwa-text3'>By filling the form, you agree to participate in the test. Please provide the
                        required details to enable us create your test account.
                        We also encourage you to take the anonymous survey after the test, the information
                        you provide will help us build a platform that adequately meets your needs.</div>
                    <div className='wwa-button'>Take the Test</div>
                    <div className='wwa-icons'>
                        <div className='wwa-icons1'><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className='wwa-icons2'><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='wwa-icons3'><FontAwesomeIcon icon={faInstagram} /></div>    
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Bodypage3