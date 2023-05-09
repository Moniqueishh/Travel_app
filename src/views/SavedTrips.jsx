import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import { useDatabase, useUser } from "reactfire";
import { set, ref } from "firebase/database";


const SavedTrips = () =>{

    const db = useDatabase();
    const { data:user } = useUser();

    const { trip, setTrip } = useContext(DataContext);

    const clearTrip = () => {
        if (user){
            set(ref(db, 'trips/' + user.uid), null);
        }
        setTrip({city: {}});
        
    }


    const removeItem = id => {
        let copyTrip = {...trip};
        delete copyTrip.citiy[id];
        if (user){
            set(ref(db, 'trips/' + user.uid), copyTrip);
        }
        setTrip(copyTrip)
    }



// For each trip I Heart(like)
// Return a card with the name of the trip below:


return (

<div>
        <Card.Body>
        <Card.Title>Your Cart:</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">

        {Object.values(trip.city).map((city, index) => {
            console.log(city);
            
            return <ListGroup.Item key={index}>


<div>
        
                <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 place-items-center">
                <h1>My Trips</h1>
                        </div>
                    </div>
                    <Button variant="danger" onClick={clearTrip}>Clear Trips</Button>
        {/* Styling for cards */}

        <div className="flex flex-col w-full lg:flex-row mt-6 mb-24">
        <div className="grid flex-grow h-32 place-items-center">
            
            {/* Actual card with info */}

            <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="/" alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title">Paris</h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
            <Button variant="warning" id="r-item" onClick={() => {removeItem(city.data.id)}}>Remove</Button>
            </div>
        </div>
        </div>
            
            </div> 
            
        <div className="divider lg:divider-horizontal"></div> 

        </div>
    </div>


            </ListGroup.Item>
        })}
        
        </ListGroup>
        </div>

)



}


export default SavedTrips;

