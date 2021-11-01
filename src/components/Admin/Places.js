import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://dark-fangs-43312.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data.places)
            })
    }, []);
    return (
        <div>
            <h1>Places</h1>
            {places.length === 0 ? <h6 className="text-center"><Spinner animation="border" /></h6> :
                <div className='container'>
                    <div className='row'>
                        {
                            places.map(place => {
                                const { _id, img, name, title, description } = place;
                                return (
                                    <div className='col-sm-12 col-md-6 col-lg-4 my-3'>
                                        <div class="card" key={_id}>
                                            <img class="card-img-top" src={img} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title">{name}</h5>
                                                <h6 class="card-title">{title?.slice(0, 50)}</h6>
                                                <p class="card-text">{description?.slice(0, 150)}</p>
                                                <h6>Price:{place.price}$</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Places;