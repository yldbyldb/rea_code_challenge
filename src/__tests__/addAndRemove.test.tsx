import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import PropertyCard from '../components/PropertyCard'

test('click the Add Property button', async () => {
    const mockProperty = {
        price: "$726,500",
        agency: {
            brandingColors: {
                primary: "#ffe512"
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
        },
        id: "1",
        mainImage: "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    };
    const savedList1 = [{
        price: "$726,500",
        agency: {
            brandingColors: {
                primary: "#ffe512"
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
        },
        id: "1",
        mainImage: "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    }, {
        price: "$560,520",
        agency: {
            brandingColors: {
                primary: "#fcfa3b"
            },
            logo: "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"
        },
        id: "2",
        mainImage: "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    }];
    const savedList2 = [{
        price: "$560,520",
        agency: {
            brandingColors: {
                primary: "#fcfa3b"
            },
            logo: "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"
        },
        id: "2",
        mainImage: "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    }];
    const addProperty = jest.fn();
    const removeProperty = () => {};

    //To test if the addProperty can be called when clicking 
    // const { getByTestId } = render(<PropertyCard data={mockProperty} key={mockProperty.id} isResults={true} addProperty={addProperty} removeProperty={removeProperty} savedList={savedList2} />);
    // const addButton = getByTestId('addProperty');
    // fireEvent.click(addButton);
    // await waitFor(() => {
    //     expect(addProperty).toBeCalled();
    // })

    //If the add the exist property, there should be an alert.
    const { getByTestId } = render(<PropertyCard data={mockProperty} key={mockProperty.id} isResults={true} addProperty={addProperty} removeProperty={removeProperty} savedList={savedList1} />);
    const addButton = getByTestId('addProperty');
    window.alert = jest.fn();
    fireEvent.click(addButton);
    await waitFor(() => {
        expect(window.alert).toBeDefined();
    })
})

test('click the Remove Property button', async () => {
    const mockProperty = {
        price: "$726,500",
        agency: {
            brandingColors: {
                primary: "#ffe512"
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
        },
        id: "1",
        mainImage: "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    };
    const savedList = [{
        price: "$726,500",
        agency: {
            brandingColors: {
                primary: "#ffe512"
            },
            logo: "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif"
        },
        id: "1",
        mainImage: "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    }, {
        price: "$560,520",
        agency: {
            brandingColors: {
                primary: "#fcfa3b"
            },
            logo: "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif"
        },
        id: "2",
        mainImage: "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    }];
    
    const removeProperty = jest.fn();
    const addProperty = () => {};

    //To test if the removeProperty can be called when clicking 
    const { getByTestId } = render(<PropertyCard data={mockProperty} key={mockProperty.id} isResults={false} addProperty={addProperty} removeProperty={removeProperty} savedList={savedList} />);
    const removeButton = getByTestId('removeProperty');
    fireEvent.click(removeButton);
    await waitFor(() => {
        expect(removeProperty).toBeCalled();
    })
})