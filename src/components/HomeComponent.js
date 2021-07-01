import React from 'react';
import { Button } from 'reactstrap';

function Home() {
    return (
        <div className="container-fluid home">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h1>Hi, I am Prakash!</h1>
                        
                        <h4>I CREATE BEAUTIFUL AND RESPONSIVE WEBSITES</h4><br></br>

                        <p>I am a front-end developer based in Dallas, Texas. I’m passionate about learning the latest and greatest technologies whether that’s the front-end or back-end. I enjoy creating sleek, responsive and user friendly webpages. I am currently open to opportunities and if you feel like we would be a great match, I’d love to hear from you!</p><br />
                        <Button color="primary" className="btn-lg">Get in touch</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;