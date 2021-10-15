import { ACTION_TYPE, IAction, ICard, IState } from "./typings";

function reducer(savedList: IState, action: IAction) {
    const { type, payload } = action;

    switch(type) {
        case ACTION_TYPE.ADD_PROPERTY:
            return {
                ...savedList, //spread the savedList
                saved: [...savedList.saved, payload as ICard] // push the clicked Property to array
            };
        case ACTION_TYPE.REMOVE_PROPERTY:
            return {
                ...savedList,
                saved: savedList.saved.filter(property => property.id !== payload as string) //delete the same id from array
            };
        case ACTION_TYPE.INIT_PROPERTY: 
            return {
                ...savedList,
                saved: payload as ICard[] //init the saved List 
            };
    }
}

export { reducer }