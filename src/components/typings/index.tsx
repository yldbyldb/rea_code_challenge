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