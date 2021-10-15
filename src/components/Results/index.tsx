import { makeStyles } from "@material-ui/core";
import { FC, ReactElement } from "react";
import PropertyCard from "../PropertyCard";
import { ICard, IData } from "../typings";

const useStyles = makeStyles((theme) => ({
    resultsList: {
        margin: '0 auto',
    },
}))

interface IProps {
    data: IData;
    savedList: ICard[];
    addProperty: (data: ICard) => void;
    removeProperty: (data: ICard) => void;
}

const Results: FC<IProps> = ({
    data,
    savedList,
    addProperty,
    removeProperty,
}): ReactElement => {    
    const classes = useStyles();

    console.log(data.results);

    return (
        <div className={classes.resultsList}>
            {data.results.map((item) => {
                return (
                    <PropertyCard
                        data={item}
                        key={item.id}
                        isResults={true}
                        savedList={savedList}
                        addProperty={addProperty}
                        removeProperty={removeProperty}
                    />
                );
            })}        
        </div>
    );
}
export default Results