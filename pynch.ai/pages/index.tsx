import type { NextPage } from 'next';
import AboutMeHeader from './AboutMeHeader';
import CenteredColumn from './components/CenteredColumn';
import HRGradient from './components/HRGradient';
import Experience from './Experience';
import React from 'react';

const Home: NextPage = () => (
    <>
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CenteredColumn>
                <AboutMeHeader />
            </CenteredColumn>
            <CenteredColumn>
                <HRGradient />
            </CenteredColumn>
            <CenteredColumn>
                <Experience />
            </CenteredColumn>
        </div>
    </>
);

export default Home;
