import React, { Component } from "react";
import {Main, Game} from './js/view'

//Main menu or game
let main = false;

export class Index extends Component {
    render() {
        if (main)
            return (<Main/>);

        else
            return (<Game/>);
    }
}

export function play() {

    main = false;

    console.log("play")
}
