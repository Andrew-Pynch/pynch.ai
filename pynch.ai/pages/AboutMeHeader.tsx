import { IconButton, Image } from 'native-base';
import type { NextPage } from 'next';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import React from 'react';

const AboutMeHeader: NextPage = () => {
    const [hoverTwitter, setHoverTwitter] = React.useState(false);
    const [hoverGithub, setHoverGithub] = React.useState(false);
    const [hoverYoutube, setHoverYoutube] = React.useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Image
                    src="/images/me.jpeg"
                    width={300}
                    height={300}
                    alt="andrew pynch"
                    borderRadius={'100%'}
                />
                <h1>Andrew Pynch</h1>
                <p style={{ marginTop: -5 }}>
                    I love deep learning 🧠, robotics 🤖, and full stack
                    development ⚡
                </p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <IconButton
                    variant={'unstyled'}
                    onPress={() => {
                        // navigate to twitter.com with next
                        window.open(
                            'https://twitter.com/andrew_pynch',
                            '_blank'
                        );
                    }}
                    onHoverIn={() => {
                        setHoverTwitter(true);
                    }}
                    onHoverOut={() => {
                        setHoverTwitter(false);
                    }}
                    icon={
                        <AiFillTwitterCircle
                            size={50}
                            color={hoverTwitter ? '#1DA1F2' : 'black'}
                        />
                    }
                />
                <IconButton
                    variant={'unstyled'}
                    onHoverIn={() => {
                        setHoverGithub(true);
                    }}
                    onHoverOut={() => {
                        setHoverGithub(false);
                    }}
                    onPress={() => {
                        // navigate to github.com with next
                        window.open(
                            'https://github.com/andrew-pynch',
                            '_blank'
                        );
                    }}
                    icon={
                        <AiFillGithub
                            size={50}
                            color={hoverGithub ? '#333' : 'black'}
                        />
                    }
                />
                <IconButton
                    variant="unstyled"
                    onHoverIn={() => {
                        setHoverYoutube(true);
                    }}
                    onHoverOut={() => {
                        setHoverYoutube(false);
                    }}
                    onPress={() => {
                        window.open(
                            'https://www.youtube.com/channel/UCHfrbjOJdO8YdnUun50YNJQ',
                            '_blank'
                        );
                    }}
                    icon={
                        <SiYoutubemusic
                            size={50}
                            color={hoverYoutube ? '#FF0000' : 'black'}
                        />
                    }
                />
            </div>
        </div>
    );
};

export default AboutMeHeader;
