/**
 * NPM import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

/**
 * Local import
 */
import Blog from 'src/components/Blog';

/**
 * Code
 */
render(<Blog />, document.getElementById('root'));
