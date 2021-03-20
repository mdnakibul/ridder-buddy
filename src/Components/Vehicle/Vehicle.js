import React from 'react';
import { useHistory } from 'react-router';

const Vehicle = (props) => {
const {name,image} = props.vehicleInfo;
// console.log(name)
let history = useHistory();
const exploreRide = ()=>{
    history.push('/destination/' + name)
    console.log('Explore rides');
}
    return (
        <div className="col-md-3">
            <div className="card p-2" style={{minHeight:'350px'}}>
                <img src={image} alt="Vehicle" className="card-img-top"/>
                <div className="card-body">
                <h3 className="card-title text-center text-uppercase">
                    {name}
                </h3>
                <button className="btn btn-primary d-block m-auto" onClick={exploreRide}>Take A Ride</button>
                </div>
            </div>
        </div>
    );
};

export default Vehicle;