import { makeStyles } from "@material-ui/core";
import PropertyCard from "../PropertyCard";

const useStyles = makeStyles((theme) => ({
    resultsList: {
        margin: '0 auto',
    },
}))

const Results = () => {
    const classes = useStyles();
    return (
        <div className={classes.resultsList}>
            <PropertyCard />
        </div>
    );
}
export default Results