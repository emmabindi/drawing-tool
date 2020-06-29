import React from "react";
import ColourSelector from './ColourSelector';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome To Your Drawing Pad</h1>
                <ColourSelector />
            </div>
        );
    }
}

export default App;