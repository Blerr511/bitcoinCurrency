import React from 'react';
import Header from './components/common/Header';
import List from './components/List/List';
import ComponentLife from './components/lifeCycle/ComponentLife';
const App = () => {
    return (
        <div>
            <Header />
            <div style={{display:'flex'}}>
            <List />

            <ComponentLife />

            </div>
        </div>
    )
}
export default App;
