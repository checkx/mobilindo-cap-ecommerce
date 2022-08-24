import React from 'react'
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <div className='footer bg-dark'>
    {/* <!-- footer --> */}
    <Container className="p-2">
        <div className="footer-content">
            <div className="footer-logo">
              <h1><span>MOBILINDO</span></h1>
                <p>Address : <br/>
                Jl. Manhattan East , Jakarta Selatan</p>
                <p>Call : <br/>
                    082354266123</p>
            </div>
                <div className="social-media-group">
                    <a href="/">
                        <div className="social-media facebook"></div>
                    </a>
                    <a href="/">
                        <div className="social-media instagram"></div>
                    </a>
                    <a href="/">
                        <div className="social-media twitter"></div>
                    </a>
                </div>
          </div>
        <div className="footer-copyright">
            <p>Copyright &copy; 2022 - MOBILINDO</p>
        </div>
    </Container>
    </div>
  );
};

export default Footer;
