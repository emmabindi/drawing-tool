import React from "react";

class ColourSelector extends React.Component {
    render() {
        const { hex } = this.props;
        return (
        <input type="color" defaultValue={hex} onChange={(event) => console.log(event.target.value)} />
        )};

      static defaultProps = {
        hex: "#f4424b"
      }
}

export default ColourSelector;