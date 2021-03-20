import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { vehicles } from '../../fakeData/fakeData';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';

const Home = () => {

    return (
        <section>
            <Container className="mt-5">
                <Row>
                    {
                        vehicles.map(vehicle => <Vehicle vehicleInfo={vehicle} key={vehicle.name}></Vehicle>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Home;