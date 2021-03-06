import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container-fluid home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-4 pt-sm-4">
                        <h1>Hi, I am Prakash!</h1>
                        
                        <h4 id="homeH4">I create beautiful and responsive websites</h4><br></br>

                        <p className="homeParagraph">I am a front-end developer based in Dallas, Texas. I’m passionate about learning the latest and greatest technologies whether that’s the front-end or back-end. I enjoy creating sleek, responsive and user friendly webpages. I am currently open to opportunities and if you feel like we would be a great match, I’d love to hear from you!</p><br />
                        <div className="mobileCenter"><Link to={ `/projects` }><Button className="btn btn-ghost btn-lg mr-3 mobileCenter">Projects</Button></Link>
                        <Link to={ `/contact` }><Button className="btn btn-ghost btn-lg mobileCenter">Get In Touch</Button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;