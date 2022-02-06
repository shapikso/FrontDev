import { useRef, useEffect } from "react";
import React from "react";
import './App.scss';

const App = () => {
    const canvasRef = useRef(null);
    const requestIdRef = useRef(null);
    const ballRef = useRef([
        { x: 50, y: 50, vx: 4, vy: 4, radius: 10, color: "#444"},
        { x: 150, y: 150, vx: -4, vy: 4, radius: 5, color: "#1ec5c5"},
        { x: 500, y: 500, vx: 4, vy: -4, radius: 20, color: "#40bd18"}
    ]);
    const size = { width: 800, height: 600 };


    const drawCircle = (ctx, size, ball) => {
        const {x, y, radius, color} = ball;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
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
        ballRef.current.forEach((ballElement => {
            updateBall(ballElement);
            drawCircle(ctx, size, ballElement);
        }));

    };

    const tick = () => {
        if (!canvasRef.current) return;
        renderFrame();
        requestIdRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        requestIdRef.current = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(requestIdRef.current);
        };
    }, []);

    return <canvas {...size} ref={canvasRef} />;
};

export default App;
