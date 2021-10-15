import { makeStyles } from "@material-ui/core";
import { FC, ReactElement } from "react";
import { ICard } from "../typings";


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
                '& button': {
                    '&:hover': {
                        cursor: 'pointer'
                    },        
                }
            },
            '& $cardButtonGreen': {
                visibility: 'visible',
                '& button': {
                    '&:hover': {
                        cursor: 'pointer'
                    },        
                }
            },
        }
    },
    cardHeader: (data: ICard) => {
        const background = data.agency.brandingColors.primary
        console.log(data.agency.brandingColors.primary);
        return {
            padding: '15px',
            background,
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
        };
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
    cardButtonRed: {
        position: 'relative',
        bottom: '110px',
        visibility: 'hidden',
        textAlign: 'center',
        '& button': {
            padding: '0px 25px',
            background: 'rgb(238 199 199)',
            fontSize: '20px',
            color: 'rgb(188 65 56)',
            border: '2px solid rgb(188 65 56)',
            borderRadius: '15px',
        }
    },
}))

interface IProps {
    data: ICard;
    isResults: boolean;
    savedList: ICard[];
    addProperty: (data: ICard) => void;
    removeProperty: (data: ICard) => void;
}

const PropertyCard: FC<IProps> = ({
    data,
    isResults,
    savedList, // this savedList is for finding if there is already exist property when click adding button
    addProperty,
    removeProperty,

}): ReactElement => {    
    
    const classes = useStyles(data);
    console.log(data);

    // To find if there is exist property when clicking add Property button
    const addItem = (): void => {
        const isExist = savedList.find((saved) => saved.id === data.id);
        if (isExist) {
            alert('This property is exist.');
            return
        };
        addProperty(data)
    };

    const removeItem = (): void => {
        removeProperty(data)
    }

    return (
        <div className={classes.propertyCard}>
            <div className={classes.cardHeader}>
                <img src={data.agency.logo} alt="logo" />
            </div>
            <div className={classes.cardImg}>
                <img src={data.mainImage} alt="mainImage" />
            </div>
            <div className={classes.cardPrice}>
                <h3>{data.price}</h3>
            </div>
            {isResults ? // The Result list and Saved list both use the same comp, so here I try to use different button basing on isResults which means if it is for the Result list.
                <div className={classes.cardButtonGreen}>
                    <button onClick={ addItem }>
                        Add property
                    </button>
                </div>
            :
                <div className={classes.cardButtonRed}>
                    <button onClick={ removeItem }>
                        Remove property
                    </button>
                </div>
            }
        </div>    
    );
}

export default PropertyCard