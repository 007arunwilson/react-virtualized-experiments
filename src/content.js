import React, { Component } from "react";
import { defaultCellRangeRenderer, Grid } from "react-virtualized";

export default class extends Component {
  constructor(props) {
    super(props);
    this.data = {
      list: [
        ["1", "Brian Vaughn", "Software Engineer", "San Jose", "CA", 95125],
        ["2", "Brian Vaughn", "Software Engineer", "San Jose", "CA", 95125],
        ["3", "Brian Vaughn", "Software Engineer", "San Jose", "CA", 95125]
      ]
    };
  }

  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return (
      <div key={key} style={style}>
        {this.data.list[rowIndex][columnIndex]}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Grid
          cellRenderer={this.cellRenderer}
          columnCount={this.data.list[0].length}
          columnWidth={200}
          height={300}
          rowCount={this.data.list.length}
          rowHeight={30}
          width={600}
        />
      </div>
    );
  }
}
