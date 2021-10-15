export interface ICard {
    price: string;
    agency: {
        brandingColors: {
            primary: string
        };
        logo: string,
    };
    id: string;
    mainImage: string;
};

export interface IData {
    results: ICard[],
    saved: ICard[]
}

export interface IState {
    saved: ICard[];
};

export interface IAction {
    type: ACTION_TYPE,
    payload: ICard | ICard[] | string
};

export enum ACTION_TYPE {
    ADD_PROPERTY= 'addProperty',
    REMOVE_PROPERTY= 'removeProperty',
    INIT_PROPERTY= 'initProperty'
}