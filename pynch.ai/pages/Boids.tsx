import React, { useEffect } from 'react';

import { Boid, IBoid } from './domain/boid';
import { useWindowSize } from './components/useWindowSize';

type BoidsProps = {};

const Boids = (props: BoidsProps) => {
    const size = useWindowSize();

    const numBoids = 80;
    const boidSize = 32;
    const tick = 0.8;

    const getBoids = (): Boid[] => {
        const boids: Boid[] = [];
        for (let i = 0; i < numBoids; i++) {
            boids.push(
                new Boid(size.width ?? 0, size.height ?? 0, 0, 0, 0, 0, 'black')
            );
        }

        return boids;
    };

    const [boids, setBoids] = React.useState<Boid[]>();
    const [loading, setLoading] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        if (size !== undefined && boids === undefined) {
            setBoids(getBoids());
        }
    }, [size, boids]);

    useEffect(() => {
        console.log('boids', boids);
        if (boids !== undefined) {
            for (const boid of boids) {
                boid.fly_towards_center(boids);
                boid.avoid_others(boids);
                boid.match_velocity(boids);
                boid.keep_within_boundaries(
                    // current mouse position
                    size.width,
                    size.height
                );
                boid.limit_speed();

                boid.x = boid.dx * tick;
                boid.y = boid.dy * tick;
            }

            console.log('tick', index);

            const interval = setInterval(() => {
                setIndex(index + 1);
            }, 160.7);
            return () => clearInterval(interval);
        }
    }, [index]);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            {boids !== undefined ? (
                boids.map((boid, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'black',
                                width: '10px',
                                height: '10px',
                                position: 'absolute',
                                top: boid.y,
                                left: boid.x,
                            }}
                        ></div>
                    );
                })
            ) : (
                <div>loading</div>
            )}
        </div>
    );
};

export default Boids;
