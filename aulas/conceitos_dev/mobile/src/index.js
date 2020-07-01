import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, [])


    return <View style={styles.container}>
                {projects.map(project => <Text key={project.id}>{project.title}</Text>)}                
            </View>
}

const styles = StyleShee.create({ 
    container: {
        flex: 1,
        backgroundColor: "#7159c1",
    },
}); 