import { h } from '@sjones6/ts-mvc';

export const App = (props) => <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"></meta>
    <title>{ props.title }</title>
  </head>
  <body>
    {props.children}
  </body>
</html>