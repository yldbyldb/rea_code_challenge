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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex- start',
        alignItems: 'center'
    }
}))

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

    return (
        <div className={classes.propertyList}>
            <div className={classes.propertyListItem}>
                <h2>Results</h2>
                <Results />
            </div>
            <div className={classes.propertyListItem}>
                <h2>Saved Properties</h2>
                <Saved />
            </div>
        </div>
    );
}
export default PropertyList