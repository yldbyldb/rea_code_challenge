import { makeStyles } from "@material-ui/core";
import { FC, ReactElement } from "react";
import PropertyCard from "../PropertyCard";
import { ICard } from "../typings";

const useStyles = makeStyles((theme) => ({
    savedList: {
        margin: '0 auto',
    },
}))

interface IProps {
    savedList: ICard[];
    addProperty: (data: ICard) => void;
    removeProperty: (data: ICard) => void;
}

const Saved: FC<IProps> = ({
    savedList,
    addProperty,
    removeProperty,
}): ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.savedList}>
            {savedList.map((item) => {
                return (
                    <PropertyCard
                        data={item} 
                        key={item.id} 
                        isResults={false}
                        savedList={savedList}
                        addProperty={addProperty} 
                        removeProperty={removeProperty} 
                    />
                );
            })}
        </div>
    );
}
export default Saved