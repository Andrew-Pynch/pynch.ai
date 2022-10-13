import { IExperienceItem } from '../Experience';
import React from 'react';
import { HStack, Image, VStack } from 'native-base';

const ExperienceItem = ({ item, index }: any) => {
    const experienceItem: IExperienceItem = item as IExperienceItem;

    console.log('experience item', experienceItem);
    return (
        <>
            <HStack marginLeft="10em" flexDirection="row">
                <VStack>
                    <Image
                        alt={experienceItem?.company}
                        size={'xl'}
                        source={{
                            uri: experienceItem.image,
                        }}
                    />
                </VStack>
                <VStack>
                    <a href="https://tavern.app">
                        <h1 style={{ color: '#23a6d5' }}>
                            {experienceItem?.company}
                        </h1>
                    </a>
                    <h2 style={{ marginTop: '-1em' }}>
                        {experienceItem?.title}
                    </h2>
                </VStack>
            </HStack>
            <HStack marginLeft="17.5em" marginTop="-3em">
                <VStack>
                    <ul>
                        {experienceItem.bullets.map((bullet, index) => {
                            return (
                                <div
                                    key={index}
                                    dangerouslySetInnerHTML={{
                                        __html: `<li>${bullet}</li>`,
                                    }}
                                />
                            );
                        })}
                    </ul>
                </VStack>
            </HStack>
        </>
    );
};

export default ExperienceItem;
