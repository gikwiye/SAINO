import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import { ExploreContainer, ExploreTitle, ExploreWrapper, ExploreHeader, ExploreText, ExploreColumn,ExploreSubTitle } from './ExploreElements'

const ExploreSection = () => {
    return (
        <React.Fragment>
            <ExploreContainer>
                <GlobalFonts />
                <ExploreTitle>
                    EXPLORE
                </ExploreTitle>
                <ExploreSubTitle>
                    OUR INSIGHT
                </ExploreSubTitle>
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
        </React.Fragment>
    )
}

export default ExploreSection