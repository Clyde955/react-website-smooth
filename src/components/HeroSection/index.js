import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg,
    VideoBg,
    HeroP,
    HeroH1,
    HeroContent,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
 } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video.mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>The Life of a Developer</HeroH1>
                <HeroP>Contact Me and Lets work together</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true'
                    dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
