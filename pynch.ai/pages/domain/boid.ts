import { cursorTo } from 'readline';

// CONSTANTS
export const SPEED_LIMIT: number = 800.0; // pixels per second
export const VISUAL_RANGE: number = 320.0; // pixels
export const MIN_DISTANCE: number = 100.0; // pixels

export interface IBoid {
    window_height: number;
    window_width: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    color: string;
}

export class Boid implements IBoid {
    constructor(
        public window_width: number,
        public window_height: number,
        public x: number,
        public y: number,
        public dx: number,
        public dy: number,
        public color: string
    ) {
        // randomly initialize x and y coordinates to be within the window width and height
        this.window_width = window_width;
        this.window_height = window_height;
        // set x and y coordinates to be within the window width and height randomly
        this.x = Math.random() * window_width;
        this.y = Math.random() * window_height;
        // this.x = Math.random() * this.window_width;
        // this.y = Math.random() * this.window_height;
        this.dx = Math.random() - 0.5 * SPEED_LIMIT;
        this.dy = Math.random() - 0.5 * SPEED_LIMIT;
        this.color = color;
    }

    public distance(other: IBoid): number {
        return Math.sqrt((this.x - other.x) ** 2) + (this.y - other.y) ** 2;
    }

    public avoid_others(boids: IBoid[]): void {
        const avoid_factor = 0.5;
        let move_x = 0.0;
        let move_y = 0.0;
        for (const other of boids) {
            let distance = this.distance(other);
            if (distance < MIN_DISTANCE) {
                move_x += this.x - other.x;
                move_y += this.y - other.y;
            }
        }

        this.dx += move_x * avoid_factor;
        this.dy += move_y * avoid_factor;
    }

    public fly_towards_center(boids: IBoid[]): void {
        const center_factor = 0.05;
        let center_x = 0.0;
        let center_y = 0.0;
        let num_neighbors = 0;

        for (const other of boids) {
            if (this.distance(other) < VISUAL_RANGE) {
                center_x += other.x;
                center_y += other.y;
                num_neighbors += 1;
            }
        }

        if (num_neighbors > 0) {
            center_x /= num_neighbors;
            center_y /= num_neighbors;

            this.dx += (center_x - this.x) * center_factor;
            this.dy += (center_y - this.y) * center_factor;
        }
    }

    public match_velocity(boids: IBoid[]): void {
        const matching_factor = 0.1;
        let avg_dx = 0.0;
        let avg_dy = 0.0;
        let num_neighbors = 0;

        for (const other of boids) {
            if (this.distance(other) < VISUAL_RANGE) {
                avg_dx += other.dx;
                avg_dy += other.dy;
                num_neighbors += 1;
            }
        }

        if (num_neighbors > 0) {
            avg_dx /= num_neighbors;
            avg_dy /= num_neighbors;

            this.dx += (avg_dx - this.dx) * matching_factor;
            this.dy += (avg_dy - this.dy) * matching_factor;
        }
    }

    public limit_speed() {
        let speed = Math.sqrt(this.dx ** 2 + this.dy ** 2);

        if (speed > SPEED_LIMIT) {
            this.dx = (this.dx / speed) * SPEED_LIMIT;
            this.dy = (this.dy / speed) * SPEED_LIMIT;
        }
    }

    public keep_within_boundaries(window_width: number, window_height: number) {
        let edge_buffer = 4.0;
        let turn_factor = 16.0;
        let x_bounded = true;
        let y_bounded = true;

        let cursor = {
            x: 900,
            y: 900,
        };

        if (this.x < this.window_height - edge_buffer) {
            this.dx += turn_factor;
            x_bounded = !x_bounded;
        }

        if (this.x > edge_buffer) {
            this.dx -= turn_factor;
            x_bounded = !x_bounded;
        }

        if (this.y < this.window_height - edge_buffer) {
            this.dy += turn_factor;
            y_bounded = !y_bounded;
        }
        if (this.y > edge_buffer) {
            this.dy -= turn_factor;
            y_bounded = !y_bounded;
        }

        if (!x_bounded) {
            this.dx *= 0.8;
        }

        if (!y_bounded) {
            this.dy *= 0.8;
        }

        if ((this.x - cursor.x) ** 2 + (this.y - cursor.y) ** 2 < 20.0) {
            this.dx += (this.x - cursor.x) * 0.1;
            this.dy += (this.y - cursor.y) * 0.1;
        }
    }
}
