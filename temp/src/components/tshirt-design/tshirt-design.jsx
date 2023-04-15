import React, { Component } from 'react';
import Konva from 'konva';
import './tshirt-design.css';

class TShirtDesigner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: '#000000',
      text: '',
    };

    this.addText = this.addText.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    // Create a new Konva.js stage and layer
    const stage = new Konva.Stage({
      container: 'canvas-container',
      width: 500,
      height: 500,
    });
    const layer = new Konva.Layer();

    // Add the layer to the stage
    stage.add(layer);

    this.layer = layer;
  }

  changeColor(event) {
    this.setState({
      currentColor: event.target.value,
    });
  }

  addText() {
    // Create a new Konva.js text object with the current text and color
    const text = new Konva.Text({
      text: this.state.text,
      fontSize: 30,
      draggable: true,
      fill: this.state.currentColor,
    });

    // Add the text object to the layer and redraw the layer
    this.layer.add(text);
    this.layer.draw();
  }

  render() {
    return (
      <div id="container">
        <div id="canvas-container"></div>
        <div id="controls">
          <input type="color" value={this.state.currentColor} onChange={this.changeColor} />
          <input type="text" value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })} />
          <button onClick={this.addText}>Add Text</button>
        </div>
      </div>
    );
  }
}

export default TShirtDesigner;