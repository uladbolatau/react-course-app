import React from "react";

export default class Icon extends React.Component<{ name: string }> {
  render(): React.ReactNode {
    return (
      <span className="material-symbols-outlined" data-name={this.props.name}>
        {this.props.name}
      </span>
    );
  }
}
