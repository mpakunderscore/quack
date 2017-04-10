import {Dimensions, StyleSheet} from 'react-native';

let { height, width } = Dimensions.get('window');

// let font = 'Heiti SC';
let font = 'Chalkduster';
let fontSize = 30;

//TODO %
export let gameUserWidth = 80;
export let gameUsersWidth = gameUserWidth;

// import {main} from './main';
// import {game} from './game';



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    map: {
        flex: 1,
        opacity: 0.2,
    },

    //MAIN

        menu: {
            position: 'absolute',
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
            // opacity: 1.0,
            // opacity: 0.5,
            // zIndex: 2
        },
        welcomeText: {
            fontFamily: font,
            position: 'absolute',
            right: 0,
            left: 0,
            top: 0,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            fontSize: fontSize,
            textAlign: 'center',
            margin: 50
        },
        selectAnimal: {
            position: 'relative',
            // top: 0, left: 0, right: 0, bottom: 0,
            // justifyContent: 'center', alignItems: 'center',
            // width: 200,
            // height: 230,
            // backgroundColor: 'green',
            width: 250,
            height: 250
        },
        selectAnimalTouchable: {
            // backgroundColor: 'red',
            // backgroundColor: 'transparent',
            width: 250,
            height: 250
        },
        select: {
            fontFamily: font,
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 50,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            fontSize: fontSize,
            textAlign: 'center',
            margin: 50
        },

    //GAME

        gameMap: {
            flex: 1,

            position: 'absolute', left: 0, right: 0, bottom: 0,

            zIndex: 1
        },
        gameMapTouchable: {
            flex: 1,

        },

        gameMenu: {
            // flex: 1,
            position: 'absolute',

            right: 0,
            left: 0,
            top: 0,
            bottom: 0,

            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',

            backgroundColor: 'transparent',
            // opacity: 0.5,

            // zIndex: 2,
        },

        gameMenu: {
            flex: 1,
            position: 'absolute',


            justifyContent: 'center',
            alignItems: 'center',

            // backgroundColor: 'green',
            // opacity: 0.5,

            backgroundColor: 'transparent',

            // zIndex: 2,
        },

        gameUser: {
            // position: 'absolute',
            width: gameUserWidth,
            height: gameUserWidth,
            // backgroundColor: 'red',
            // zIndex: 3
        },
        gameUserTouchable: {
            // backgroundColor: 'transparent',
            // backgroundColor: 'green',
            width: gameUserWidth,
            height: gameUserWidth,
            // zIndex: 3
        },

        gameUsers: {
            position: 'relative',
            width: gameUserWidth,
            // height: gameUserWidth,
            zIndex: 2
        },

        userMenu: {
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 20,

            flexDirection: 'row',
            justifyContent: 'space-between',

            // backgroundColor: 'red',

            margin: 20
        },
        userMenuText: {
            fontSize: 25,
            backgroundColor: 'transparent',
            fontFamily: font,
            // color: 'gray'
        }
});
