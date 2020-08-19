import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {

    

    --primary: #fff;
    --black: #1b1f23;
    --gray: #586069;
    --gray-light: #6a737d;
    --gray-dark: #24292e;
    --orange: #f9826c;
    --logo: #fff;
    --header: #24292e;
    --username: #666;
    --search: rgba(255, 255, 255, 0.13);
    --search-placeholder: hsla(0, 0%, 100%, .75);
    --icon: #6a737d;
    --link: #0366d6;
    --border: #e1e4e8;
    --ticker: rgba(209,213,218, .5);
    --calendar-scale-0: #ebedf0;
    --calendar-scale-1: #9BE9A8;
    --calendar-scale-2: #3FC463;
    --calendar-scale-3: #30A14E;
    --calendar-scale-4: #216E3A;
    --javascript: #f1e05a;
    --typescript: #2b7489;
    --other-language: #8257e5;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--primary);
    -webkit-font-smoothing: antialiased;
  }
  *, button, input {
    border: 0;
    background: none;
    color: var(--black);
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }
  a {
    text-decoration: none
  }
  ul {
    list-style: none
  }
  a, button {
    cursor: pointer;
  }
`;