import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import {ExploreContainer, ExploreTitle,ExploreWrapper,ExploreHeader,ExploreText,ExploreColumn} from './ExploreElements'

const ExploreSection = () => {
    return (
        <>
            <ExploreContainer>
            <GlobalFonts/>
                <ExploreTitle>
                    Explore our insight
                </ExploreTitle>
                    <ExploreWrapper>
                        <ExploreColumn>
                                <ExploreHeader>
                                    LOREM IPSUM DOLOR
                                </ExploreHeader>
                                <ExploreText>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam.
                                </ExploreText>
                        </ExploreColumn>
                        <ExploreColumn>
                                <ExploreHeader>
                                    LOREM IPSUM DOLOR
                                </ExploreHeader>
                                <ExploreText>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam.
                                </ExploreText>
                        </ExploreColumn>
                        <ExploreColumn>
                                <ExploreHeader>
                                    LOREM IPSUM DOLOR
                                </ExploreHeader>
                                <ExploreText>
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam.
                                </ExploreText>
                        </ExploreColumn>
                        
                    </ExploreWrapper>
            </ExploreContainer>
        </>
    )
}

export default ExploreSection