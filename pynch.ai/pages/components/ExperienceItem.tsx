import { IExperienceItem } from '../Experience';
import React from 'react';
import { Image } from 'native-base';

const ExperienceItem = ({ item, index }: any) => {
    const experienceItem: IExperienceItem = item as IExperienceItem;

    console.log('experience item', experienceItem);
    return (
        <div>
            <h2>{experienceItem?.title}</h2>
            <Image
                size={'xl'}
                source={{
                    uri: experienceItem.image,
                }}
            />
            {experienceItem?.image}
        </div>
    );
};

export default ExperienceItem;
