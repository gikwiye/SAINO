import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import { ExploreContainer, ExploreTitle, ExploreWrapper, ExploreHeader, ExploreText, ExploreColumn,ExploreSubTitle } from './ExploreElements'
import { useTranslation } from 'react-i18next'

const ExploreSection = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <ExploreContainer id ='Explore'>
                <GlobalFonts />
                <ExploreTitle>
                    {t("EXPLORE")}
                </ExploreTitle>
                <ExploreSubTitle>
                    {t("OUR INSIGHT")}
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