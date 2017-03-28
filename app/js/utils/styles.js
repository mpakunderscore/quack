import {Dimensions, StyleSheet} from 'react-native';

let { height, width } = Dimensions.get('window');

// let font = 'Heiti SC';
let font = 'Chalkduster';

//TODO
let gameUserWidth = 80;

let fontSize = 30;

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainMap: {
        // position: 'absolute',
        flex: 1,
        // position: 'absolute', left: 0, right: 0, bottom: 0,
        opacity: 0.2,
        zIndex: 1
    },
    mainMenu: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        opacity: 1.0,
        // opacity: 0.5,
        zIndex: 2
    },
        welcome: {
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
            // top: 0, left: 0, right: 0, bottom: 0,
            // justifyContent: 'center', alignItems: 'center',
            // width: 200,
            // height: 230,
            // backgroundColor: 'green'
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

    gameMap: {
        // position: 'absolute',
        flex: 1,
        // position: 'absolute', left: 0, right: 0, bottom: 0,
        // opacity: 0.2,
        zIndex: 1
    },
    gameUser: {
        position: 'absolute',
        width: gameUserWidth,
        height: gameUserWidth,
        // backgroundColor: 'green',
        // right: 0,
        // left: 0,
        // top: 0,
        // bottom: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        zIndex: 2
    },
    gameUserTouchable: {
        backgroundColor: 'transparent',
        // backgroundColor: 'green',
        width: gameUserWidth,
        height: gameUserWidth,
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