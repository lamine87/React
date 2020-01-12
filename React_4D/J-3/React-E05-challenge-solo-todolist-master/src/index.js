import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Todo from 'src/components/Todo';

const rootComponent = <Todo />;
const targetNode = document.getElementById('root');
render(rootComponent, targetNode);
