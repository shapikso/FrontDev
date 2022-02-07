import { useRef, useEffect, useState } from "react";
import React from "react";
import './App.scss';

const App = () => {
    const canvasRef = useRef(null);
    const requestIdRef = useRef(null);
    let timerId = useRef();
    const ballRef = useRef([
        { x: 50, y: 50, vx: 2, vy: 4, radius: 10, color: "#b29090"},
        { x: 150, y: 150, vx: -4, vy: -1, radius: 40, color: "#1ec5c5"},
        { x: 50, y: 500, vx: 2, vy: -4, radius: 20, color: "#40bd18"},
        { x: 10, y: 10, vx: 4, vy: -4, radius: 10, color: "#be8b8b"},
        { x: 100, y: 10, vx: 4, vy: 5, radius: 50, color: "#1ec5c5"},
        { x: 400, y: 40, vx: -4, vy: -4, radius: 20, color: "#40bd18"},
        { x: 500, y: 0, vx: 2, vy: -1, radius: 15, color: "#b29090"},
        { x: 66, y: 24, vx: -6, vy: -1, radius: 40, color: "#1ec5c5"},
        { x: 250, y: 34, vx: 7, vy: -4, radius: 20, color: "#40bd18"},
        { x: 10, y: 10, vx: -3, vy: -7, radius: 10, color: "#be8b8b"},
        { x: 100, y: 10, vx: 1, vy: 2, radius: 50, color: "#1ec5c5"},
        { x: 400, y: 40, vx: -2, vy: 0, radius: 20, color: "#40bd18"},

    ]);
    const [isFiberAnimation, setIsFiberAnimation ] = useState(true);
    const size = { width: 800, height: 600 };


    const drawCircle = (ctx, size, ball, date) => {
        const {x, y, radius, color} = ball;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.textAlign = 'center';
        ctx.font = `${radius}px Arial`;
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'middle';
        ctx.fillText(date.getSeconds().toString(), x, y + radius/30);
        ctx.closePath();
        ctx.restore();

    };
    
    const updateBall = (ball) => {
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x + ball.radius >= size.width) {
            ball.vx = -ball.vx;
            ball.x = size.width - ball.radius;
        }
        if (ball.x - ball.radius <= 0) {
            ball.vx = -ball.vx;
            ball.x = ball.radius;
        }
        if (ball.y + ball.radius >= size.height) {
            ball.vy = -ball.vy;
            ball.y = size.height - ball.radius;
        }
        if (ball.y - ball.radius <= 0) {
            ball.vy = -ball.vy;
            ball.y = ball.radius;
        }
    };

    const renderFrame = () => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, size.width, size.height);
        const date = new Date();
        ballRef.current.forEach((ballElement => {
            updateBall(ballElement);
            drawCircle(ctx, size, ballElement, date);
        }));

    };

    const tick = () => {
        if(isFiberAnimation){
            renderFrame();
            requestIdRef.current = requestAnimationFrame(tick);
        } else {
            timerId = setInterval(() => {renderFrame();}, 1000/30);
        }
    };

    useEffect(() => {
        clearInterval(timerId);
        tick();
    }, [isFiberAnimation]);

    const toggleAnimation = () => {
        clearInterval(timerId);
        cancelAnimationFrame(requestIdRef.current);
        setIsFiberAnimation(!isFiberAnimation);
    };
    return (
        <div>
            <canvas {...size} ref={canvasRef} />
            <div className="buttonWrapper">
                <button onClick={toggleAnimation}> Change Animation </button>
            </div>

        </div>
    );
};

export default App;
