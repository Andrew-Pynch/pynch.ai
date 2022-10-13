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
    body: JSX.Element;
}

type ExperienceProps = {};

const Experience: NextPage = (props: ExperienceProps) => {
    console.log(React.version);
    const experienceItems: IExperienceItem[] = [
        {
            startString: 'March 2022',
            endString: 'Current',
            title: 'Senior Software Engineer',
            company: 'Tavern.app',
            location: 'Austin, TX',
            image: 'https://pbs.twimg.com/profile_images/1537332513449734149/0k_Rfasf_400x400.jpg',
            body: <></>,
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
