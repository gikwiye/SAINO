import React from 'react'
import GlobalFonts from '../../fonts/fonts'
import {
    ManifestoContainer,
    ManifestoTitle,
    ManifestoTitleContainer,
    ManifestoText,
    ManifestoWrapper,
    ManifestoBgText,
    ManifestoFgImg,
    ManifestoTitleTpRight,
    ManifestoTextTpRight,
    ManifestoTitleBtmLeft,
    ManifestoTextBtmLeft,
    ManifestoTitleBtmRight,
    ManifestoTextBtmRight } from './ManifestoElements'


const Manifesto = () => {
    return (
        <>
            <ManifestoContainer>
            <GlobalFonts/>
            <ManifestoWrapper>
             <ManifestoTitleContainer>
                <ManifestoTitle>
                    Lorem ipsum
                </ManifestoTitle>
             </ManifestoTitleContainer>
            
                <ManifestoText>
                    A l’heure actuelle, nous en sommes 
                    encore au stade du développement des 
                    protocoles des futures DLT de demain 
                    qui devront potentiellement constituer 
                    des normes à l’échelles internationales. 
                    Nous investissons donc principalement sur 
                    des projets de type protocole. Nous estimons 
                    également que la DeFi (finance décentralisé) 
                    ainsi que les plateformes NFTs sont les 
                    premières applications des smart contract 
                    ayant un véritable impact et un pouvoir disruptif indéniable.
                </ManifestoText>
                <ManifestoBgText>
                    Manifesto
                </ManifestoBgText>
                <ManifestoFgImg>

                </ManifestoFgImg>
                <ManifestoTitleTpRight>
                    Lorem ipsum dolor
                </ManifestoTitleTpRight>
                <ManifestoTextTpRight>
                    Nous investissons donc également majoritairement sur ce type de projet. 
                    L'interopérabilité est également un point essentiel pour permettre une 
                    évolution de cet écosysteme. Nous investissons donc majoritairement sur 
                    des projets ayant cette notion d’intéropérabilité 
                    tel que l’écosysteme Polkadot ou Cosmos. Ces trois axes constituent le 
                    cœur de nos investissements actuellement.
                </ManifestoTextTpRight>
                <ManifestoTitleBtmLeft>
                    DLT
                </ManifestoTitleBtmLeft>
                <ManifestoTextBtmLeft>
                    Distributed ledger technologie ou appelé plus communément et par abus 
                    de language "technologies blockchain”. A savoir que la blockchain n’est 
                    qu’un DLT parmis d’autres.
                </ManifestoTextBtmLeft>
                <ManifestoTitleBtmRight>
                    DAG
                </ManifestoTitleBtmRight>
                <ManifestoTextBtmRight>
                    Distributed ledger technologie ou appelé plus communément et par abus de l
                    anguage "technologies blockchain”. A savoir que la blockchain n’est qu’un 
                    DLT parmis d’autres.
                </ManifestoTextBtmRight>
            </ManifestoWrapper>
            </ManifestoContainer>
            
        </>
    )
}

export default Manifesto
