import { NextPage } from 'next';
import CenteredColumn from '../../pynch.ai/pages/components/CenteredColumn';
import React from 'react';
export interface IExperienceItem {
    startString: string;
    endString: string;
    title: string;
    company: string;
    location: string;
    body: JSX.Element;
}

type ExperienceProps = {};

const Experience: NextPage = (props: ExperienceProps) => {
    const experienceItems: IExperienceItem[] = [
        {
            startString: 'March 2022',
            endString: 'Current',
            title: 'Senior Software Engineer',
            company: 'Tavern.app',
            location: 'Austin, TX',
            body: <></>,
        },
    ];

    return (
        <CenteredColumn>
            <h1>Experience</h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* <FlatList /> */}
            </div>
        </CenteredColumn>
    );
};

export default Experience;
