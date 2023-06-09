import React, { Component } from 'react';
import '../App.css';
import { Container} from 'reactstrap';


function Home() {
    return (
        <>
            <div>
                <Container>
                    <h1>Welcome to Certichain</h1>
                    <div>
                        <img src="https://www.researchgate.net/publication/351356935/figure/fig4/AS:1020456937197574@1620307301792/Digital-Certificate-verification-process-using-Blockchain.png"/>
                    </div>
                </Container>
            </div>
        </>
    );
}


export default Home;
