import React from 'react'
import {
    TeamContainer,
    TeamBgText,
    TeamTitle,
    TeamSubTitle,
    TeamBlockImg,
    TeamBlockText} from './TeamElements'

const Team = () => {
    return (
        <>
            <TeamContainer>
            <TeamTitle>
                Lorem ipsum dolor
            </TeamTitle>
            <TeamSubTitle>
                Lorem ipsum dolor sit amet consectetur adipis elit.
            </TeamSubTitle>
                <TeamBgText>
                    Team
                </TeamBgText>
                <TeamBlockImg style={{left: '155px',top: '475px'}}>

                </TeamBlockImg>
                <TeamBlockImg style={{left: '558px',top: '555px'}}>

                </TeamBlockImg>
                <TeamBlockImg style={{left: '961px',top: '375px'}}>

                </TeamBlockImg>
                <TeamBlockText style={{left: '155px',top: '1015px'}}>
                    Lorem ipsum <br/>LOREM IPSUM DOLOR
                </TeamBlockText>
                <TeamBlockText style={{left: '557px',top: '1095px'}}>
                    Lorem ipsum <br/>LOREM IPSUM DOLOR
                </TeamBlockText>
                <TeamBlockText style={{left: '961px',top: '915px'}}>
                    Lorem ipsum <br/>LOREM IPSUM DOLOR
                </TeamBlockText>

            </TeamContainer>
        </>
    )
}

export default Team
