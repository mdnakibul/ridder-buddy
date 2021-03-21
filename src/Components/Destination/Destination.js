import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Destination.css';
import { vehicles } from '../../fakeData/fakeData';

const Destination = () => {
    let { vehicleName } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [submit,setSubmit] = useState(false);
    const [destination,setDestination] = useState({
        pickfrom : '',
        pickto : ''
    });
    const onSubmit = data => {
        setSubmit(true);
        const {pickfrom,pickto} = data;
        console.log(pickfrom,pickto);
        destination.pickfrom = pickfrom;
        destination.pickto = pickto;
        console.log(destination)
    };

 const currentVehicle = vehicles.filter(vehicle => vehicle.name === vehicleName);
//  console.log(currentVehicle[0])
 const {name,image} = currentVehicle[0];
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">

                    {
                        !submit ?
                            <form onSubmit={handleSubmit(onSubmit)} className="pickup-form">
                                <label htmlFor="pickfrom"> Pick From </label>
                                <input type="text" name="pickfrom" ref={register({ required: true })} />
                                {errors.pickfrom && <span>This field is required</span>}
                                <br />
                                <label htmlFor="pickto"> Pick to</label>
                                <input type="text" name="pickto" ref={register({ required: true })} />
                                {errors.pickto && <span>This field is required</span>}

                                <input type="submit" />
                            </form> :
                            <div className="rent-container">
                                <div className="destination">
                                    <ul>
                                        <li>{destination.pickfrom}</li>
                                        <li>{destination.pickto}</li>
                                    </ul>
                                </div>
                                <div className="rent-block">
                                    <div className="rent-block-left">
                                        <img src={image} alt="vehicle" />
                                        <h5>{name} </h5>
                                        <p><i className="fas fa-user-friends"></i> 4</p>
                                    </div>
                                    <div className="rent-block-right">
                                        <p>$67</p>
                                    </div>
                                </div>
                                <div className="rent-block">
                                    <div className="rent-block-left">
                                        <img src={image} alt="vehicle" />
                                        <h5>{name} </h5>
                                        <p><i className="fas fa-user-friends"></i> 4</p>
                                    </div>
                                    <div className="rent-block-right">
                                        <p>$67</p>
                                    </div>
                                </div>
                                <div className="rent-block">
                                    <div className="rent-block-left">
                                        <img src={image} alt="vehicle" />
                                        <h5>{name} </h5>
                                        <p><i className="fas fa-user-friends"></i> 4</p>
                                    </div>
                                    <div className="rent-block-right">
                                        <p>$67</p>
                                    </div>
                                </div>
                            </div>
                    }
                </div>

                <div className="col-md-8">
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.623580876025!2d90.32726106707945!3d23.8105444238919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616262853536!5m2!1sen!2sbd" width="600" height="450" style={{border:'0px'}} allowFullScreen="" loading="lazy" title="google map"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;