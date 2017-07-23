import helloJS from './modules/javascript.js';
import helloTS from './modules/typescript';
import {heading} from './modules/dzejquery';
import * as ReactDOM from 'react-dom';
import {ReactHello} from './modules/ReactHello';
import * as React from 'react';


helloJS([1, 2, 3]);

// error:
// helloTS([1, 2, 3]);
helloTS("Miso");

heading(function() {
    ReactDOM.render(
        <ReactHello name="Miso" age={34} />,
        document.querySelector("#react")
    );
});