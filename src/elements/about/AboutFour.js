import React from 'react';
import VideoTwo from '../video/VideoTwo';
import { FiCheck, FiGlobe, FiUser } from "react-icons/fi";


const PopupData = [
    {
        id: "01",
        image: "./images/bg/bg-image-4.jpg",
        popupLink: [
            'https://www.youtube.com/watch?v=f76dOZW2gwI',
        ],
    }
]

const AboutFour = ({ image }) => {
    return (
        <div className="about-area about-style-4 rn-section-gap">
            <div className="container">
                <div className="row row--40 align-items-center">
                    <div className="col-lg-6">
                        {PopupData.map((item) => (
                            <div className="video-btn" key={item.id}>

                                <VideoTwo imagename={`${image}`} galleryItem={item} />
                                {/* <video_pp /> */}


                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <h3 className="title">Get ACM Membership <br /> at  <strong>Only 600/-</strong></h3>
                                <ul className="feature-list">
                                    <li>
                                        <div className="icon">
                                            <FiGlobe />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Check our Linktree</h4>
                                            <p className="text">Linktree: linktr.ee/ioitacm</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FiUser />
                                        </div>
                                        <div className="title-wrapper">
                                            <h4 className="title">Aval Sonigara</h4>
                                            <p className="text">+919325680696</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="about-btn mt--30">
                                    &nbsp; &nbsp;      <a className="btn-default" href="#">Take Membership</a>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <a className="btn-default" href="#">Check ID</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour
