// src/components/BlocklyComponent.jsx

import React, { useEffect } from 'react';
//import Blockly from 'blockly/core';
import 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';
import 'blockly/python';
import 'blockly/php';
import 'blockly/lua';
import 'blockly/dart';
import { init, regenerate, languageChange, execute } from '../services/script';
import '../services/acorn_interpreter';
import '../services/msgs';
import '../services/toolbox';
import '../styles/blocklyStyles.css';

const BlocklyComponent = () => {



    return (
        <div className="app-container">
            <div id="blocklyDiv" className="main"></div>
            <div id="outputDiv" className="main">
                <select id="generateDropdown" onChange={regenerate}>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="php">PHP</option>
                    <option value="lua">Lua</option>
                    <option value="dart">Dart</option>
                </select>
                <br className="next-line" />
                <select id="languageDropdown" onChange={languageChange}></select>
                <pre id="codeHolder" className="prettyprint" dir="ltr"></pre>
            </div>
            <div id="playButton" className="play-button">
                <span className="material-icons" aria-hidden="true">play_circle_outlined</span>Run
            </div>
        </div>
    );
};

export default BlocklyComponent;
