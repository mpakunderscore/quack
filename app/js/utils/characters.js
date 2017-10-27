import {images} from './images';

import {} from '../actions';

let width = 300;

export const characters = [
    {
        id: "text",
        image: null,
        name: "text",
        // width: 320,
        // height: 320,
        // text: ""
        data: "Here are a few ducks for you, with unique abilities in each. New ones can be found in various ways. To get some, you have to go through a lot. \nGood luck."
    },
    {
        id: "quack",
        image: images.goose,
        name: "goose",
        width: width,
        height: width,
        text: "Quack"
    },
    {
        id: "cyber",
        image: images.cyber,
        name: "cyber",
        width: width,
        height: width,
        text: "Cyber"
    },
    // {
    //     id: "death",
    //     image: images.death,
    //     name: "death",
    //     width: 220,
    //     height: 220,
    //     text: "Death"
    // },
    {
        id: "spacy",
        image: images.spacy,
        name: "spacy",
        width: width,
        height: width,
        text: "Spacy"
    },
    // {
    //     id: "sir",
    //     image: images.sir,
    //     name: "sir",
    //     width: 220,
    //     height: 220,
    //     text: "Quests"
    // },
    // {
    //     id: "drake",
    //     image: images.drake,
    //     name: "drake",
    //     width: 220,
    //     height: 220,
    //     text: "Settings"
    // },
    // {
    //     id: "chick",
    //     image: images.chick,
    //     name: "chick",
    //     width: 220,
    //     height: 220,
    //     text: "Items"
    // },
];
