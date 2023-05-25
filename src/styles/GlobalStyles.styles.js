import {createGlobalStyle} from "styled-components";
import NotoSansKR_Light from '../assets/font/NotoSansKR-Light.woff2';
import NotoSansKR_Regular from '../assets/font/NotoSansKR-Regular.woff2';
import NotoSansKR_Medium from '../assets/font/NotoSansKR-Medium.woff2';
import NotoSansKR_Bold from '../assets/font/NotoSansKR-Bold.woff2';
import NotoSansKR_Black from '../assets/font/NotoSansKR-Black.woff2'
import Roboto_Regular from '../assets/font/Roboto-Regular.woff2';
import Roboto_Medium from '../assets/font/Roboto-Medium.woff2';
import Roboto_bold from '../assets/font/Roboto-Bold.woff2';
import Roboto_black from '../assets/font/Roboto-Black.woff2';

const GlobalStyles = createGlobalStyle`
  :root {
    // color
    --text0: #000000;
    --text1: #404040;
    --text2: #7D7C78;
    --text3: #999999;
    --text4: #C1C1C1;
    --text5: #FFFFFF;

    --line0: #727981;
    --line1: #BCBCC0;
    --line2: #C1C1C1;
    --line3: #E5E5EC;
    --line4: #E4E5E9;
    --line5: #F6F6F6;
    --line6: #FAFAFA;

    --blue1: #233CF9;
    --blue2: #0176F9;
    --blue3: #409AFF;
    --blue4: #00AEF2;
    --blue5: #E2F0FF;
    --blue6: #C2D7FF;
    --blue7: #ABC9FB;
    --blue8: #78BBFF;

    --red1: #DC0000;
    --red2: #FF453A;
    --red3: #FF6961;
    --red4: #FFCE6D;
    --red5: #FFA6B6;
    --red6: #FFDAD1;
    --red7: #FF6C99;

    --button1: #EBEBEB;
    --button2: #409AFF;
    --button3: #233CF9;

    --side1: #6AB2BE;
    --side2: #E5F7FB;
    --side3: #DBB071;
    --side4: #FCF2E6;
    --side5: #FFFBE2;
    --side6: #2FD159;
    --side7: #FAE101;
    --side8: #B2C7DA;
    --side9: #13BD7E;
    --side10: #7CE5AC;

    --bg1: #F8F9FA;
    --bg2: #F6F6F6;
    --bg3: #FFFFFF;
    --bg4: #FAFAFA;
    --bg5: #EAEDF2;
    --bg6: #EFEFEF;
    //  background: var(--primary-color); 이런 식으로 사용함

    // font-size
    --font10: .625rem;
    --font11: .688rem;
    --font12: .75rem;
    --font14: .875rem;
    --font16: 1rem;
    --font18: 1.125rem;
    --font20: 1.25rem;
    --font26: 1.625rem;
    --font30: 1.875rem;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Noto Sans KR", "Roboto", sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  /*  한글 폰트 */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: local(※),
    url(${NotoSansKR_Light}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: local(※),
    url(${NotoSansKR_Regular}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: local(※),
    url(${NotoSansKR_Medium}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: local(※),
    url(${NotoSansKR_Bold}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src: local(※),
    url(${NotoSansKR_Black}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }


  /*  영문 폰트 */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(※),
    url(${Roboto_Regular}) format('woff2');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local(※),
    url(${Roboto_Medium}) format('woff2');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(※),
    url(${Roboto_bold}) format('woff2');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: local(※),
    url(${Roboto_black}) format('woff2');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }
`;


export default GlobalStyles;