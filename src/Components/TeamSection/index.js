import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import {
    TeamContainer,

    TeamBgText,
    TeamTitle,
    TeamSubTitle,
    TeamBlockImg,

    TeamImageTextBlock,
    TeamBlockText
} from './TeamElements'
import { useTranslation } from 'react-i18next'
const Team = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <TeamContainer id="Teams">

                <GlobalFonts />

                <TeamBgText>
                    {t("Team")}
                </TeamBgText>

                <TeamImageTextBlock style={{ paddingTop: 96, paddingRight: 78 }}>
                    <TeamTitle >
                        {t("Team")}
                    </TeamTitle>
                    <TeamSubTitle>
                        Lorem ipsum dolor sit amet consectetur adipis elit.
                </TeamSubTitle>
                    <TeamBlockImg />
                    <TeamBlockText >
                        Lorem ipsum <br /><span style={{ color: '#000000' }}>LOREM IPSUM DOLOR</span>
                    </TeamBlockText>
                </TeamImageTextBlock>
                <TeamImageTextBlock style={{ paddingTop: 382 }}>
                    <TeamBlockImg />

                    <TeamBlockText >
                        Lorem ipsum <br /><span style={{ color: '#000000' }}>LOREM IPSUM DOLOR</span>
                    </TeamBlockText>
                </TeamImageTextBlock>
                <TeamImageTextBlock style={{ paddingTop: 202, paddingLeft: 78 }}>
                    <TeamBlockImg />

                    <TeamBlockText >
                        Lorem ipsum <br /><span style={{ color: '#000000' }}>LOREM IPSUM DOLOR</span>
                    </TeamBlockText>
                </TeamImageTextBlock>


            </TeamContainer>
        </React.Fragment>
    )
}

export default Team
