import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import React from 'react';
import ReactDOM from "react-dom";
//import App from './App';


let state = {
    postData: [
        { id: 0, message: 'ну че кого???', likeCount: 12 },
        { id: 0, message: 'та пока не понятно', likeCount: 34 },
        { id: 0, message: 'учим react', likeCount: 1 },
        { id: 0, message: 'тра-та-та', likeCount: 74 },
    ]
}

it('length of post should be incremented', () => {
    //1.test data
    let action = addPostActionCreator("it-camasutra.com");
   
    //2.action
    let newState = profileReducer(state, action);

    //3.expectation
    expect(newState.postData.length).toBe(5);
    
})

it('message  of newpost should be correct' , () => {
    //1.test data
    let action = addPostActionCreator("it-camasutra.com");
    
    //2.action
    let newState = profileReducer(state, action);

    //3.expectation
   
    expect(newState.postData[4].message).toBe("it-camasutra.com");
})

it('after deleting length of message should be decrement' , () => {
    //1.test data
    let action = deletePost(1);
    
    //2.action
    let newState = profileReducer(state, action);

    //3.expectation   
    expect(newState.postData.length).toBe(3);
})
it('after deleting length shouldn`t  be decrement if id is incorrect' , () => {
    //1.test data
    let action = deletePost(1000);
    
    //2.action
    let newState = profileReducer(state, action);

    //3.expectation   
    expect(newState.postData.length).toBe(4);
})

