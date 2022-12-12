import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
    },
    mainContainer : {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    buttonContainer:{
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icons: {
        marginHorizontal: 5,
        justifyContent:"center",
        alignSelf:'center',
      },
    textInput:{
        flex: 1,
        backgroundColor:'white',
        marginHorizontal: 10,
    }
    

})

export default styles;