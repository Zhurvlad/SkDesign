import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
html{
  box-sizing: border-box;
}

*,
*::after,
*::before{
  box-sizing: inherit;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  font-size: inherit;
}

ul[class] {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

a{
  text-decoration: none;
}


body {
  margin: 0;
  font-family: sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`