import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    propertyCard: {
        margin: '10px auto',
        border: '1px solid black',
        borderRadius: '10px',
        width: '300px',
        position: 'relative',
        '&:hover': {
            '& $cardButtonRed': {
                visibility: 'visible',
            },
            '& $cardButtonGreen': {
                visibility: 'visible',
            },
        }
    },
    cardHeader: {
            padding: '15px',
            background: '#ffe512',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
    },
    cardImg: {
        '& img': {
            width: '100%',
        }
    },
    cardPrice: {
        paddingLeft: '20px',
        '& h3' : {
            marginBottom: '0px',
        }
    },
    cardButtonGreen: {
        position: 'relative',
        bottom: '110px',
        visibility: 'hidden',
        textAlign: 'center',
        '& button': {
            padding: '0px 25px',
            background: 'rgb(214 231 206)',
            fontSize: '20px',
            color: 'rgb(122 147 93)',
            border: '2px solid rgb(122 147 93)',
            borderRadius: '15px',
        }

    },
}))


const PropertyCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.propertyCard}>
            <div className={classes.cardHeader}>
                <img src='https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif' alt="logo" />
            </div>
            <div className={classes.cardImg}>
                <img src='https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg' alt="mainImage" />
            </div>
            <div className={classes.cardPrice}>
                <h3>$560,520</h3>
            </div>
            {/* Todo: need red and green button according to if is results */}
            <div className={classes.cardButtonGreen}>
                <button>
                    Add property
                </button>
            </div>
        </div>
    );
}

export default PropertyCard