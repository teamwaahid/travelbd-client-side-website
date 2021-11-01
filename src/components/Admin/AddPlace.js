import React, { useRef } from 'react';

const AddPlace = () => {
    const titleRef = useRef();
    const descRef = useRef();
    const picRef = useRef();
    const ratingRef = useRef();
    const priceRef = useRef();

    async function addUser(e) {
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const pic = picRef.current.value;
        const rating = ratingRef.current.value;
        const price = priceRef.current.value;
        const user = { name: title, description: desc, img: pic, rating: rating, price: price }

        const response = await fetch('https://dark-fangs-43312.herokuapp.com/newplace/add', {
            method: 'post',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        });
        const data = await response.json()


        titleRef.current.value = '';
        descRef.current.value = '';
        picRef.current.value = '';
        e.preventDefault();
    }
    return (
        <div>
            <h1>Add place</h1>
            <form onSubmit={addUser}>
                <input ref={titleRef} type="text" placeholder='Title'></input>
                <input ref={descRef} type="text" placeholder='Description'></input>
                <input ref={picRef} type="text" placeholder='Picture URL'></input>
                <input ref={ratingRef} type="text" placeholder='Rating'></input>
                <input ref={priceRef} type="text" placeholder='Price'></input>
                <input type="submit" value='Add'></input>
            </form>
        </div>
    );
};

export default AddPlace;