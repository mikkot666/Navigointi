import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState('Testing');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#00f000'
            },
            headerRight: () => (

                <AntDesign
                    style={styles.navButton}
                        name="arrowright"
                        size={24}
                        onPress={() => navigation.navigate('Second', { message: message })}
                />
            )
        })
    }, [message]);

    return (
        <View style={styles.container}>
            <Text>Home screen{message}</Text>
            <TextInput onChangeText={ text => setMessage(text) } value={message} placeholder="Type messages here"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});