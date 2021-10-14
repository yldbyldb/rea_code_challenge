import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchData } from "../data/data";
import Results from "./Results";
import Saved from "./Saved";

const useStyles = makeStyles((theme) => ({
    propertyList: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    propertyListItem: {
        margin: '10px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex- start',
        alignItems: 'center'
    }
}))

//Todo: need to add all the type
const PropertyList = () => {
    const classes = useStyles();

    const [state, setState] = useState({})

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            const data = JSON.parse(JSON.stringify(result));
            console.log(data);
            setState(data);
        }
        getData()
    }, [])
    //Todo: get the initial state for Saved comp
    return (
        <div className={classes.propertyList}>
            <div className={classes.propertyListItem}>
                <h2>Results</h2>
                {/* Todo: need to pass the state.results to Results comp */}
                <Results /> 
            </div>
            <div className={classes.propertyListItem}>
                <h2>Saved Properties</h2>
                {/* Todo: need to pass the state.saved to Saved comp */}
                <Saved />
            </div>
        </div>
    );
}
export default PropertyList