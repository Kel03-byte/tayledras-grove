// Contact Page

import React, { Fragment } from "react";

function Contact() {
    return (
        <Fragment>
            <div id='page'>
                <div id='title'>Contact Us</div>
                <p >Contact us or give us a follow on our social media!</p>
                <div id='contact-list'>
                    <p><a id='icon' href='tayledrasgrove@outlook.com'><i className="fas fa-envelope fa-3x"></i></a></p>
                    <p><a id='icon' href='https://www.facebook.com/TayledrasEquestrian'><i className="fab fa-facebook fa-3x"></i></a></p>
                    <p><a id='icon' href='https://www.instagram.com/tayledrasgrove/'><i className="fab fa-instagram fa-3x"></i></a></p>
                </div>
            </div>
        </Fragment>
    )
};

export default Contact;