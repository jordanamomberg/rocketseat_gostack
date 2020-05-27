import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import './App.css';

function App() {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []); //primeiro parâmetro recebe uma função, e o segundo quando vai ser disparado. 

    async function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now}`);

        //setProjects([...projects, `Novo projeto ${Date.now}`]) 

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
	        owner: "Jordana Momberg"
        })
        
        const project = response.data; 

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title='Projects' />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;