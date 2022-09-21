import React, { Component } from "react";
import { Button, Card } from "reactstrap";
import "./ContactUs.css";


class ContactUs extends Component{
    render(){
        return(
            <>
                <div className="container">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.715525697402!2d126.88006235596498!3d37.50301732243484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e6c37cd41b1%3A0x623b282305b2c863!2z6rWs66Gc7Jet!5e0!3m2!1sko!2skr!4v1663726334814!5m2!1sko!2skr"
                            width={650}
                            height={450}
                            className="mx-auto"
                            ></iframe>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactUs;
