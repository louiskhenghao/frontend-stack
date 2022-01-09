import * as React from 'react';
import { Children } from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { AppRegistry } from 'react-native';
import { ServerStyleSheet } from 'styled-components';
import appInfo from '../../app.json';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    AppRegistry.registerComponent(appInfo.name, () => Main);
    const { getStyleElement } = AppRegistry.getApplication(appInfo.name);

    // ==== can inject your custom style with variables reference over here. eg: font icon
    const styles = [getStyleElement()];

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {Children.toArray(styles)}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>{/* SET FAVICON OR META HERE */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
