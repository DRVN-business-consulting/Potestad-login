import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MyTextInput = () => {
    const [value, setValue] = React.useState('');

    return (
        <View>
            <TextInput value={value} onChangeText={setValue} style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        
    }
});

export default MyTextInput;