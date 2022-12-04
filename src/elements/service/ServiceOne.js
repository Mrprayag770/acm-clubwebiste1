import React from 'react';
import { FiActivity, FiCast, FiMap, FiCodesandbox, FiGitPullRequest, FiDollarSign, FiSlack, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiCodesandbox />,
        title: 'Innovate',
        description: 'Access to resources for lifelong learning,popular certs and much more'
    },
    {
        icon: <FiCast />,
        title: 'Acquire Knowledge',
        description: 'Insightful webinars on hot topics presented by today’s innovators'
    },
    {
        icon: <FiSlack />,
        title: 'Lifelong Learning',
        description: 'Ability to search DL, access bibliographic citations, view articles.'
    },

    {
        icon: <FiDollarSign />,
        title: 'Exclusive Discounts',
        description: 'Special subscription pricing on ACM Books series,journals and conferences.'
    },
    {
        icon: <FiGitPullRequest />,
        title: 'Establish Connections',
        description: 'Connect with various industrial connoissuers and techies.'
    },


    {
        icon: <FiBookOpen />,
        title: 'Tri-weekly Newsletter',
        description: 'TechNews subscription (ACM’s tri-weekly email IT news digest)'
    },
]



const ServiceOne = ({ textAlign, serviceStyle }) => {
    return (
        <div className="row row--15 service-wrapper">
            {ServiceList.map((val, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;