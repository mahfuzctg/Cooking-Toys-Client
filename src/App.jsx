import "./App.css";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </>
  );
}

export default App;
