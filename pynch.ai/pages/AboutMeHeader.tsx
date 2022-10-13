import type { NextPage } from 'next';
import Image from 'next/image';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';

const AboutMeHeader: NextPage = () => {
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
                <AiFillTwitterCircle
                    size={50}
                    onClick={() => {
                        // navigate to twitter.com with next
                        window.open(
                            'https://twitter.com/andrew_pynch',
                            '_blank'
                        );
                    }}
                ></AiFillTwitterCircle>
                <AiFillGithub
                    style={{
                        marginTop: 5,
                    }}
                    size={50}
                    onClick={() => {
                        // navigate to github.com with next
                        window.open(
                            'https://github.com/andrew-pynch',
                            '_blank'
                        );
                    }}
                ></AiFillGithub>
                <SiYoutubemusic
                    style={{
                        marginTop: 5,
                    }}
                    size={50}
                    onClick={() => {
                        // navigate to youtube.com with next
                        window.open(
                            'https://www.youtube.com/channel/UCHfrbjOJdO8YdnUun50YNJQ',
                            '_blank'
                        );
                    }}
                ></SiYoutubemusic>
            </div>
        </div>
    );
};

export default AboutMeHeader;
