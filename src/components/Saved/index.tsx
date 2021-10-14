import { makeStyles } from "@material-ui/core";
import PropertyCard from "../PropertyCard";

const useStyles = makeStyles((theme) => ({
    savedList: {
        margin: '0 auto',
    },
}))

const Saved = () => {
    const classes = useStyles();
    return (
        <div className={classes.savedList}>
            {/* Todo: map the saved from savedList */}
            <PropertyCard />
        </div>
    );
}
export default Saved