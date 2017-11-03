/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Img from 'components/Img';
import Footer from 'components/Footer';
import Banner from './banner-metal.jpg';
import A from 'components/A';
import styles from './styles.css';

import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

function App(props) {
  return (
    <div className={styles.wrapper}>
      <h1>DatePicker:</h1>
      <div style={{border: "5px solid red"}}>
           <DatePicker />
      </div>
      {/*<Helmet*/}
        {/*titleTemplate="%s - React.js Boilerplate"*/}
        {/*defaultTitle="React.js Boilerplate"*/}
        {/*meta={[*/}
          {/*{ name: 'description', content: 'A React.js Boilerplate application' },*/}
        {/*]}*/}
      {/*/>*/}
      {/*<A className={styles.logoWrapper} href="https://twitter.com/mxstbr">*/}
        {/*<Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />*/}
      {/*</A>*/}
      {/*{React.Children.toArray(props.children)}*/}
      {/*<Footer />*/}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
