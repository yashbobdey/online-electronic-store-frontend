import React from 'react';
import {Container} from 'react-bootstrap';
export default function AboutUs() {
    return(
            <Container className=" mt-3 min-vh-100  text-justify " style={{backgroundImage:"url('https://th.bing.com/th/id/R.669e5afad4adbcdc66af89ed7f3f6240?rik=9RHN83mmqC%2fm3w&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f11%2f92%2fTduYC2.jpg&ehk=OHlwEgDWdNiHMoV6hivuertk5oUVQtxcwJbdDN7kAko%3d&risl=&pid=ImgRaw')"}}>
                <div className=" text-center" >
                <h6>Contact Us</h6>
                    <p>Do you have a question? A complaint? Or do you need help while completing a transaction on OnlineElectronicStore.com?</p>
                    <p>For everything from your order, and your account to our site and our deals and services, call us on 909091-8181.</p>
                    <p className="mt-5">Call us at 909091-8181</p>
                    <p>Online Electronic Store phone Customer support is now available 24/7.</p>
                    <p>Meanwhile you can visit our Customer Care page for self help.</p>
                    </div>
            </Container>
    );
}