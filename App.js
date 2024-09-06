import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert, Switch } from 'react-native';
import MyTheme from './src/MyTheme/MyTheme.js';
// import MyTextInput from './src/MyTheme/MyTextInput.js';

export default function App() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const usernamecreds = 'Dreianna';
    const passwordcreds = 'Haileypot';

    const handleSubmit = () => {
        if (username === usernamecreds && password === passwordcreds) {
            Alert.alert('Login Successfully!');
        } else if (username !== usernamecreds || password !== passwordcreds) {
            Alert.alert('Invalid username or password');
        }
    };

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={MyTheme.container}>
            <StatusBar style="auto" />
            <View style={MyTheme.innerContainer}>
                {/* <MyTextInput/> */}
                <Text style={MyTheme.title}>LOGIN PAGE</Text>
                <View style={MyTheme.formContainer}>
                    <View style={MyTheme.inputContainer}>
                        <Text>Username</Text>
                        <TextInput
                            style={MyTheme.textInput}
                            value={username}
                            onChangeText={(value) => setUsername(value)}
                            placeholder="Enter username"
                        />
                        <Text>Password</Text>
                        <TextInput
                            secureTextEntry
                            style={MyTheme.textInput}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            placeholder="Enter password"
                        />
                    </View>
                    <Button title="Submit" color="pink" onPress={handleSubmit} />
                </View>
            </View>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </SafeAreaView>
    );
}
