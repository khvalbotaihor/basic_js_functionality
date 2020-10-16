import React from 'react';
import './App.css';

function App() {
    const names = ["dimich", "Sveta", "Katia", "Victor", "Ignat", "Valera"]
    const users = [{id:1, name: "dimich"}, {id:2, name: "Sveta"}, {id:3, name: "Katia"}, {id:4, name: "Victor"}, {id:5, name: "Ignat"}, {id:6, name: "Valera"}]

    const libManifestPluginelements = users.map((n) => <li key={n.id}>{n.name}</li>)

    return (
        <div className="App">


            <ul>
                {libManifestPluginelements}
            </ul>

        </div>
    );
}

export default App;
