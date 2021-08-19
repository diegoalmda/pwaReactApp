import React from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

// import { Container } from './styles';

const Main = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/members').then(response => {
            response.json().then(data => {
                setMembers(data);
            })
        })
    }, []);
  return (
    <FlatList
    contentContainerStyle={{ padding: 24 }}
        data={members}
        keyExtractor={member => member.login}
        renderItem={({ item: member }) => (
            <View style={styles.member}>
                <Image style={styles.image} source={{ uri: member.avatar_url }} />
                <Text>{member.login}</Text>
            </View>
        )}
    />
  );
}

const styles = StyleSheet.create({
    member: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
    }
})

export default Main;