import { makeStyles } from "@material-ui/core";
import { FC, ReactElement, useCallback, useEffect, useState } from "react";
import { fetchData } from "../data/data";
import Results from "./Results";
import Saved from "./Saved";
import { ICard, IData } from "./typings";

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

const PropertyList: FC = (): ReactElement => {
    const classes = useStyles();

    const [state, setState] = useState<IData>({
        results: [],
        saved: []
    })

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            const data = JSON.parse(JSON.stringify(result));
            console.log(data);
            setState(data);
            setSavedList(data.saved)
        }
        getData()
    }, [])

    const [savedList, setSavedList] = useState<ICard[]>([]);
    const addProperty = useCallback((property: ICard) => {
        setSavedList(savedList => [...savedList, property])
    }, [])
    const removeProperty = useCallback((property: ICard) => {
        console.log(property);
    }, [])


    return (
        <div className={classes.propertyList}>
            <div className={classes.propertyListItem}>
                <h2>Results</h2>
                <Results 
                    data={state} 
                    savedList={savedList}
                    addProperty={addProperty} 
                    removeProperty={removeProperty} 
                />
            </div>
            <div className={classes.propertyListItem}>
                <h2>Saved Properties</h2>
                <Saved 
                    savedList={savedList}
                    addProperty={addProperty} 
                    removeProperty={removeProperty} 
                />
            </div>
        </div>
    );
}
export default PropertyList