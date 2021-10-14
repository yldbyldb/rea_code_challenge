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
    savedList:ICard[]
}

const Results: FC<IProps> = ({
    data,
    savedList
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
                    />
                );
            })}        
        </div>
    );
}
export default Results