import { createContext, useState } from "react";

const DataProvider = props => {
    // declare state variables here
    // we can then set up as a global context accessible by all children
    const [trip, setTrip] = useState({city: {}});
    return(
        <DataContext.Provider value={{'trip': trip, 'setTrip': setTrip}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
export const DataContext = createContext();