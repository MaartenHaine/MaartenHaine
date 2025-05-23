<script>
    import { onMount } from 'svelte';

    let canvas;
    let ctx;
    let lines = [];
    let animationId;

    class Line {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.length = Math.random() * 100 + 50; // Line length
            this.angle = Math.random() * Math.PI * 2; // Random angle
            this.vx = (Math.random() - 0.5) * 0.5; // Horizontal velocity
            this.vy = (Math.random() - 0.5) * 0.5; // Vertical velocity
            this.va = (Math.random() - 0.5) * 0.002; // Angular velocity
            this.opacity = Math.random() * 0.5 + 0.1; // Random opacity
            this.color = getRandomColor();
        }

        update() {
            // Move the line
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.va;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Calculate end points based on angle and length
            this.endX = this.x + Math.cos(this.angle) * this.length;
            this.endY = this.y + Math.sin(this.angle) * this.length;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.endX, this.endY);
            ctx.stroke();
            ctx.restore();
        }
    }

    function getRandomColor() {
        const colors = [
            '#0063ff',
            '#ff0000',
            '#00ff3b',
            '#f100ff',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createLines() {
        lines = [];
        for (let i = 0; i < 60; i++) {
            lines.push(new Line());
        }
    }

    function drawConnections() {
        // Draw connections between lines that are close to each other
        for (let i = 0; i < lines.length; i++) {
            for (let j = i + 1; j < lines.length; j++) {
                // Calculate distance between midpoints of lines
                const midX1 = (lines[i].x + lines[i].endX) / 2;
                const midY1 = (lines[i].y + lines[i].endY) / 2;
                const midX2 = (lines[j].x + lines[j].endX) / 2;
                const midY2 = (lines[j].y + lines[j].endY) / 2;

                const dx = midX1 - midX2;
                const dy = midY1 - midY2;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.save();
                    ctx.globalAlpha = (150 - distance) / 150 * 0.1;
                    ctx.strokeStyle = '#3b82f6';
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

        // Update and draw lines
        lines.forEach(line => {
            line.update();
            line.draw();
        });

        // Draw connections between lines
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
