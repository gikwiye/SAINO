import {createGlobalStyle} from 'styled-components'


import Montserrat from './Monserrat/Montserrat-ExtraLight.ttf';
import MontserratThin from './Monserrat/Montserrat-Thin.ttf';
import MontserratRegular from './Monserrat/Montserrat-Regular.ttf';
import MontserratBold from './Monserrat/Montserrat-Bold.ttf';
import LaurentianStd from './Laurentian-Std-Regular/Laurentian_Std_Regular.otf'
import LegatumLight from './Legatum/LEGATUM-Light.otf'


export default createGlobalStyle`
    
    

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), 
        url(${Montserrat}) format('truetype');
        
    }
    @font-face {
        font-family: 'Montserrat_regular';
        src: local('Montserrat_regular'), 
        url(${MontserratRegular}) format('truetype');
        
    }
    @font-face {
        font-family: 'Montserrat_bold';
        src: local('Montserrat_bold'), 
        url(${MontserratBold}) format('truetype');
        
    }
    @font-face {
        font-family: 'Montserrat_thin';
        src: local('Montserrat_thin'), 
        url(${MontserratThin}) format('truetype');
    }
    @font-face {
        font-family: 'Laurentian_std';
        src: local('Laurentian_std'), 
        url(${LaurentianStd}) format('opentype');
    }
    @font-face {
        font-family: 'Legatum-Light';
        src: local('Legatum-Light'), 
        url(${LegatumLight}) format('opentype');
    }
`;