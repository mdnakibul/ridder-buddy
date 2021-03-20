import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Destination.css';
import mapImage from '../../images/map.png'

const Destination = () => {
    let { vehicleName } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [submit,setSubmit] = useState(false)
    const onSubmit = data => {
        setSubmit(true)
        console.log(data)
    };
console.log(submit)
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
                                        <li>Mirpur 1</li>
                                        <li>Dhanmondi</li>
                                    </ul>
                                </div>
                                <div className="rent-block">
                                    <div className="rent-block-left">
                                        <img src={mapImage} alt="vehicle" />
                                        <h5>Car </h5>
                                        <p><i className="fas fa-user-friends"></i> 4</p>
                                    </div>
                                    <div className="rent-block-right">
                                        <p>$67</p>
                                    </div>
                                </div>
                                <div className="rent-block">
                                    <div className="rent-block-left">
                                        <img src={mapImage} alt="vehicle" />
                                        <h5>Car </h5>
                                        <p><i className="fas fa-user-friends"></i> 4</p>
                                    </div>
                                    <div className="rent-block-right">
                                        <p>$67</p>
                                    </div>
                                </div>
                                <div className="rent-block">
                                    <div className="rent-block-left">
                                        <img src={mapImage} alt="vehicle" />
                                        <h5>Car </h5>
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
                        <img src={mapImage} alt="Map" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;