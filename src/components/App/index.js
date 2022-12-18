import React from 'react';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

// == Import
import meta from '../../utilities/titles';
import './styles.css';

const NavBar = loadable(() => import('../Navbar'));
// == Composant
const App = () => (
  <>
    <Helmet>
      <title>
        {meta.HOME.title}
      </title>
      {/* <!-- PRIMARY META TAG  --> */}
      <meta
        name="description"
        content={meta.HOME.description}
      />
      {/* <!-- LINKEDIN META TAG  --> */}
      <meta name="image" property="og:image" content="./screen0921.jpg" />
      <meta name="author" content="Avenir Sud Environnement" />
      {/* <!-- FACEBOOK/OG META TAG --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.HOME.link} />
      <meta property="og:title" content={meta.HOME.title} />
      <meta property="og:description" content={meta.HOME.description} />
      <meta property="og:image" content="./screen0921.jpg" />
    </Helmet>
    <div className="app">
      <NavBar />
      <h1>Are U REaDy</h1>
    </div>
  </>
);

// == Export
export default App;
