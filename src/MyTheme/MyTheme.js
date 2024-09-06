import { StyleSheet } from "react-native";

export const primaryColor = 'pink';

const MyTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
      marginHorizontal: 10
    },
    // header: {
    //   justifyContent: 'center',
    // },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
    },
    formContainer: {
      padding: 15,
      borderColor: primaryColor,
      borderWidth: 2,
    },
    inputContainer: {
      marginVertical: 10,
    },
    textInput: {
      height: 40,
      margin: 12,
      borderColor: primaryColor,
      borderWidth: 1,
      padding: 10,
    //   elevation: 8,
    //   shadowRadius: 8,
    //   shadowColor: 'black',

  
    },
});

export default MyTheme;