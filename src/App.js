import './App.scss';
import React, {Component} from 'react';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
    frameCount = 0;
    animationFrameID;

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            isPainting: false,
            lineWidth: 8,
            color: '#f44336'
        };
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.rect = this.canvasRef.current.getBoundingClientRect();
    }

    componentDidUpdate() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.loop();
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameID);
    }

    loop = () => {
        this.animationFrameID = window.requestAnimationFrame(this.loop);
        if(this.state.isPainting) {
            this.drawWithMoveRect();
        }
    }

    drawWithMoveRect = () => {
        this.ctx.strokeStyle = this.state.color;
        this.ctx.lineCap = "round";
        this.ctx.lineWidth = this.state.lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(this.state.x, this.state.y);
        this.ctx.lineTo(this.state.x - this.state.dx, this.state.y - this.state.dy);
        this.ctx.stroke();
        this.ctx.closePath();
    }
    togglePainting = () =>this.setState({isPainting: !this.state.isPainting});

    setColor = (color) => this.setState({color: color.hex});


    handleMouseMove = (e) => {
        this.setState({x: e.clientX - this.rect.x, dx: e.movementX, y: e.clientY - this.rect.y, dy: e.movementY});
    }

    changeRangeHandler = (value) => this.setState({lineWidth: value});

    
    render() {
        return (
            <div className="paint">
                <canvas
                    ref={this.canvasRef}
                    width="800px"
                    height="600px"
                    onMouseMove={this.handleMouseMove}
                    onMouseDown={this.togglePainting}
                    onMouseUp={this.togglePainting}
                />
                <SideBar color={this.state.color} setColor={this.setColor} changeRangeHandler={this.changeRangeHandler} />
            </div>
        );
    }
}

export default App;
