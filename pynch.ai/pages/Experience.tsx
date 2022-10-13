import { Box, FlatList, ScrollView } from 'native-base';
import { NextPage } from 'next';
import React from 'react';
import CenteredColumn from './components/CenteredColumn';
import ExperienceItem from './components/ExperienceItem';

export interface IExperienceItem {
    startString: string;
    endString: string;
    title: string;
    company: string;
    location: string;
    image: string;
    bullets: string[];
}

type ExperienceProps = {};

const Experience: NextPage = (props: ExperienceProps) => {
    console.log(React.version);
    const experienceItems: IExperienceItem[] = [
        {
            startString: 'March 2022',
            endString: 'Current',
            title: 'Senior Software Engineer',
            company: 'Tavern',
            location: 'Austin, TX',
            image: 'https://pbs.twimg.com/profile_images/1537332513449734149/0k_Rfasf_400x400.jpg',
            bullets: [
                'Created public facing API to enable more complex interactions with the platform for power users.',
                'Implemented nft and token gating using moralis web3 SDK',
                'Implemented TurboRepo Monorepo to streamline development and deployment',
                'Selected technology stack to optimize development speed and developer experience',
                'Created and mainted e2e test suite to ensure quality and stability of web and mobile platforms',
                'Created Node libraries and tooling to enhance development ease, velocity, and <a  href="https://www.npmjs.com/package/data-validation-tools" target={_blank}>>data validation</a> on our backend',
                'Managed team of 5 engineers to set timelines, workloads, and performed weekly Agile processes.',
            ],
        },
    ];

    return (
        <>
            <CenteredColumn>
                <h1>Experience</h1>
            </CenteredColumn>
            <ScrollView flexDirection={'row'} width="100%" height="100%">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        <FlatList
                            data={experienceItems}
                            renderItem={({ item, index }) => {
                                return <ExperienceItem {...{ item, index }} />;
                            }}
                        />
                    </div>
                </div>
            </ScrollView>
        </>
    );
};

export default Experience;
