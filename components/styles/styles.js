import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput,
    Button,
    Image,
    ImageBackground
} from 'react-native';
import { color } from 'react-native-reanimated';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
         backgroundColor: '#003f5c',

        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Insertlogo: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    inputView: {
        width: '80%',
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    },
    forgot: {
        color: 'white',
        fontSize: 11
    },
    loginBtn: {
        width: '50%',
        backgroundColor: 'blueviolet',
        borderRadius: 25,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    insertBtn: {
        width: '50%',
        backgroundColor: 'blueviolet',
        borderRadius: 25,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
        fontSize: 20,
    },
    homeText: {
        color: 'white',
        fontSize: 20,
    },
    homeScreenBtn: {
        width: '80%',
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    logoutBtn: {
        width: 50,
        backgroundColor: 'transparent',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        height: 50,
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        marginTop: 1,
        marginBottom: 0,
        marginRight: 30,
    },
    logoutText: {
        height: 30,
        width: 30
    },
    multiBtnContainer: {
        margin: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    addPictureIcon: {
        height: 30,
        width: 30,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        position: 'absolute',
        left: 65,
        top: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
      },
    wronger: {
        marginTop: 30,
        color: "red",
    },
    outer: {
        color: "white",
        fontSize: 19,
        padding: 10
    },
    viewImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "baseline",
      },
});