<script>
    import { onMount } from 'svelte';
    import { theme } from '../stores/theme.js';

    let canvas;
    let ctx;
    let lines = [];
    let animationId;
    let currentTheme = 'light';

    // Subscribe to theme changes
    theme.subscribe(value => {
        currentTheme = value;
    });

    class Line {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.length = Math.random() * 100 + 50;
            this.angle = Math.random() * Math.PI * 2;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.va = (Math.random() - 0.5) * 0.002;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = getRandomColor();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.va;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            this.endX = this.x + Math.cos(this.angle) * this.length;
            this.endY = this.y + Math.sin(this.angle) * this.length;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity * (currentTheme === 'dark' ? 0.8 : 0.6);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.endX, this.endY);
            ctx.stroke();
            ctx.restore();
        }
    }

    function getRandomColor() {
        if (currentTheme === 'dark') {
            const colors = [
                '#fa6060', // lighter blue
                '#00ff02', // even lighter blue
                '#bf00ff', // blue
                '#00ffff', // darker blue
                '#1d4ed8'  // even darker blue
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        } else {
            const colors = [
                '#ff0000', // blue
                '#00ff2f', // lighter blue
                '#de00ff', // even lighter blue
                '#2563eb', // darker blue
                '#1d4ed8'  // even darker blue
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
    }

    function createLines() {
        lines = [];
        for (let i = 20; i < 80; i++) {
            lines.push(new Line());
        }
    }

    function drawConnections() {
        for (let i = 0; i < lines.length; i++) {
            for (let j = i + 1; j < lines.length; j++) {
                const midX1 = (lines[i].x + lines[i].endX) / 2;
                const midY1 = (lines[i].y + lines[i].endY) / 2;
                const midX2 = (lines[j].x + lines[j].endX) / 2;
                const midY2 = (lines[j].y + lines[j].endY) / 2;

                const dx = midX1 - midX2;
                const dy = midY1 - midY2;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.save();
                    ctx.globalAlpha = (150 - distance) / 150 * (currentTheme === 'dark' ? 0.15 : 0.1);
                    ctx.strokeStyle = currentTheme === 'dark' ? '#60a5fa' : '#3b82f6';
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(midX1, midY1);
                    ctx.lineTo(midX2, midY2);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        lines.forEach(line => {
            line.update();
            line.draw();
        });

        drawConnections();

        animationId = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    onMount(() => {
        ctx = canvas.getContext('2d');
        resizeCanvas();
        createLines();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createLines();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    });
</script>

<canvas
        bind:this={canvas}
        class="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style="opacity: 0.6;"
></canvas>
