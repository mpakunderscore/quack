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
    gameMap: {
        flex: 1,
        opacity: 0.7,
    },
    button: {
        // backgroundColor: "red"
    },
    modal: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        opacity: 0.95,
    },
    modalText: {
        fontSize: 25,
        backgroundColor: 'transparent',
        fontFamily: font,
        margin: 50
    },

    //MAIN

        menu: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
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
        swiper: {
        },
        swiperView: {
            flex: 1,
            // position: 'absolute',
            // bottom: 50,
            // flexDirection: 'column',
            // justifyContent: 'space-between',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'green',
            // opacity: 0.5
        },
        selectAnimal: {
            // position: 'relative',
            // top: 0, left: 0, right: 0, bottom: 0,
            // justifyContent: 'center', alignItems: 'center',
            // opacity: 0.5,
            // backgroundColor: 'green',
            // flex: 1,
            // height: 250
            // margin: 50,
            // padding: 50
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

        gameMapTouchable: {
            flex: 1,

        },

        gameMenu: {
            // flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,

            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: 'transparent',
            // opacity: 0.5,

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

        mapItem: {
            width: 30,
            height: 30
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
