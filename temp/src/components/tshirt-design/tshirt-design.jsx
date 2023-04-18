import React, { Component } from 'react';
import Konva from 'konva';
import './tshirt-design.css';
import { Image } from 'react-konva';

class TShirtDesigner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: '#000000',
      text: 'Enter text here',
      image: null,
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
    this.loadImage();

  }

  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
        this.loadImage();
    }
}
componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
}
loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
}
handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
        image: this.image
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    this.imageNode.getLayer().batchDraw();
  }

  changeColor(event) {
    this.setState({
      currentColor: event.target.value,
    });
  }

  addText() {
    // Create a new Konva.js text object with the current text and color
    const text = new Konva.Text({
      x: 100,
      y:100,
      text: this.state.text,
      fontSize: 30,
      draggable: true,
      fill: this.state.currentColor,
    });

    // Add the text object to the layer and redraw the layer
    this.layer.add(text);
    this.layer.draw();
  }

  addImage() {
    const image = new Konva.Image({
      x: 100,
      y: 100,
      image: 'temp/src/logo.svg',
      width: 200,
      height: 200
    });

    this.layer.add(image);
    this.layer.draw();

    }

  render() {
    const { x, y } = this.props;

    return (
      <div id="container">
        <div id="canvas-container"></div>
        <div id="controls">
          <h2>ADD TEXT</h2>
          <div className='controls-content'>
          <input type="color" value={this.state.currentColor} onChange={this.changeColor} />
          <input type="text" value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })} />
          <button onClick={this.addText}>Add Text</button>
          </div>
        </div>
        <Image
                x={x}
                y={y}
                image={this.state.image}
                ref={node => {
                    this.imageNode = node;
                }}
            />
      </div>
    );
  }
}

export default TShirtDesigner;