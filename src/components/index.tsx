import { makeStyles } from "@material-ui/core";
import { FC, ReactElement, useCallback, useEffect, useReducer, useState } from "react";
import { fetchData } from "../data/data";
import { reducer } from "./reducer";
import Results from "./Results";
import Saved from "./Saved";
import { ACTION_TYPE, ICard, IData, IState } from "./typings";

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

    const initSavedProperty: IState = {
        saved: []
    }

    const [state, setState] = useState<IData>({
        results: [],
        saved: [],
    })

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            // use stringify to deal with some err because of the json object
            const data = JSON.parse(JSON.stringify(result));
            console.log(data);
            //get data from backend then pass to state in order to pass them to children comp
            setState(data);
            // init the saved list after getting data from backend
            dispatch({
                type: ACTION_TYPE.INIT_PROPERTY,
                payload: data.saved
            })
        }
        getData()
    }, [])

    const [savedList, dispatch] = useReducer(reducer, initSavedProperty)
    //adding the property when click green button
    const addProperty = useCallback((property: ICard): void => {
        dispatch({
            type: ACTION_TYPE.ADD_PROPERTY,
            payload: property
        })
    }, [])
    //removing the property when clicking red button
    const removeProperty = useCallback((property: ICard): void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_PROPERTY,
            payload: property.id
        })
    }, [])

    return (
        <div className={classes.propertyList}>
            <div className={classes.propertyListItem}>
                <h2>Results</h2>
                <Results 
                    data={state} 
                    savedList={savedList.saved}
                    addProperty={addProperty} 
                    removeProperty={removeProperty}
                />
            </div>
            <div className={classes.propertyListItem}>
                <h2>Saved Properties</h2>
                <Saved 
                    savedList={savedList.saved}
                    addProperty={addProperty} 
                    removeProperty={removeProperty} 
                />
            </div>
        </div>
    );
}
export default PropertyList