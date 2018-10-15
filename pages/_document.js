import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta charset="utf-8"></meta>
          <meta name="author" content="Ricky Garcia"></meta>
          <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="../static/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="../static/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Noto+Sans" rel="stylesheet"/>
        </Head>
        <body className="bg-pattern">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}