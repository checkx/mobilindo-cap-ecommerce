import React from "react";
import { Container, Row, Col } from "reactstrap";
import Products from "./Products";

const Home = () => {
  
    return (
        <>
            {/* Banner */}
                <Container className="vh-100">
                    <Row>
                    <Col className="m-auto">
                        <h1>TOKO ONLINE PENJUAL MOBIL TERBAIK DI INDONESIA</h1>
                        <h1><span className="text-primary">MOBILINDO</span> CORP</h1>
                        <p>
                            Banyak diskon menarik sampai akhir tahun 2022.
                        </p>
                        <a href="#products" className="btn btn-primary">Lihat Product</a>
                    </Col>
                    <Col className="mt-5">
                        <img src="assets/image/mobil.jpg" className="d-block w-100 rounded" height='400px' width='600px' alt="" />
                    </Col>
                    </Row>
                </Container>
              <Products />
        </>
    );
};

export default Home;