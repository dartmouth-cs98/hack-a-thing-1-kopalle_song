import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    matchText: {
        display: 'flex',
        flexDirection: 'column', 
        // height: '100%',
        alignContent: "center",
       
    },
    matchHeader: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    matchSubHeader: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "400"
    },

    imgContainer: {
        alignSelf: "center",
        margin: 7
    }

});