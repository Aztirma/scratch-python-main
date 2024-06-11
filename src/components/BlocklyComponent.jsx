import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import 'blockly/blocks';
import 'blockly/javascript';
import 'blockly/python';
import * as En from 'blockly/msg/en';
import './BlocklyComponent.css'; // Importa el archivo CSS

Blockly.setLocale(En);

const BlocklyComponent = () => {
    const blocklyDiv = useRef(null);
    const toolbox = useRef(null);
    const [generatedPythonCode, setGeneratedPythonCode] = useState('');
    const [generatedJSCode, setGeneratedJSCode] = useState('');

    useEffect(() => {
        if (blocklyDiv.current && toolbox.current) {
            const workspace = Blockly.inject(blocklyDiv.current, {
                toolbox: toolbox.current,
            });

            workspace.addChangeListener(() => {
                const pythonCode = pythonGenerator.workspaceToCode(workspace);
                const jsCode = javascriptGenerator.workspaceToCode(workspace);
                setGeneratedPythonCode(pythonCode);
                setGeneratedJSCode(jsCode);
            });

            return () => {
                workspace.dispose(); // Clean up the workspace on component unmount
            };
        }
    }, []);

    const executeCode = () => {
        try {
            // Note: Using eval is generally not recommended due to security concerns,
            // but this is for demonstration purposes. In a real application, use a safer method.
            // eslint-disable-next-line no-eval
            eval(generatedJSCode);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="flex">
            <div className="blockly-div" ref={blocklyDiv} />
            <div className="toolbox">
                <xml ref={toolbox}>
                    <category name="Logic" colour="%{BKY_LOGIC_HUE}">
                        <block type="controls_if"></block>
                        <block type="logic_compare"></block>
                        <block type="logic_operation"></block>
                        <block type="logic_boolean"></block>
                        <block type="logic_null"></block>
                        <block type="logic_ternary"></block>
                    </category>
                    <category name="Loops" colour="%{BKY_LOOPS_HUE}">
                        <block type="controls_repeat_ext">
                            <value name="TIMES">
                                <shadow type="math_number">
                                    <field name="NUM">10</field>
                                </shadow>
                            </value>
                        </block>
                        <block type="controls_whileUntil"></block>
                        <block type="controls_for">
                            <value name="FROM">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                            <value name="TO">
                                <shadow type="math_number">
                                    <field name="NUM">10</field>
                                </shadow>
                            </value>
                            <value name="BY">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                        </block>
                        <block type="controls_forEach"></block>
                        <block type="controls_flow_statements"></block>
                    </category>
                    <category name="Math" colour="%{BKY_MATH_HUE}">
                        <block type="math_number">
                            <field name="NUM">123</field>
                        </block>
                        <block type="math_arithmetic"></block>
                        <block type="math_single"></block>
                        <block type="math_trig"></block>
                        <block type="math_constant"></block>
                        <block type="math_number_property"></block>
                        <block type="math_round"></block>
                        <block type="math_on_list"></block>
                        <block type="math_modulo"></block>
                        <block type="math_constrain">
                            <value name="LOW">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                            <value name="HIGH">
                                <shadow type="math_number">
                                    <field name="NUM">100</field>
                                </shadow>
                            </value>
                        </block>
                        <block type="math_random_int">
                            <value name="FROM">
                                <shadow type="math_number">
                                    <field name="NUM">1</field>
                                </shadow>
                            </value>
                            <value name="TO">
                                <shadow type="math_number">
                                    <field name="NUM">100</field>
                                </shadow>
                            </value>
                        </block>
                        <block type="math_random_float"></block>
                    </category>
                    <category name="Text" colour="%{BKY_TEXTS_HUE}">
                        <block type="text"></block>
                        <block type="text_join"></block>
                        <block type="text_append">
                            <value name="TEXT">
                                <shadow type="text"></shadow>
                            </value>
                        </block>
                        <block type="text_length"></block>
                        <block type="text_isEmpty"></block>
                        <block type="text_indexOf">
                            <value name="VALUE">
                                <block type="variables_get">
                                    <field name="VAR">text</field>
                                </block>
                            </value>
                        </block>
                        <block type="text_charAt">
                            <value name="VALUE">
                                <block type="variables_get">
                                    <field name="VAR">text</field>
                                </block>
                            </value>
                        </block>
                        <block type="text_getSubstring">
                            <value name="STRING">
                                <block type="variables_get">
                                    <field name="VAR">text</field>
                                </block>
                            </value>
                        </block>
                        <block type="text_changeCase"></block>
                        <block type="text_trim"></block>
                        <block type="text_print"></block>
                        <block type="text_prompt_ext">
                            <value name="TEXT">
                                <shadow type="text"></shadow>
                            </value>
                        </block>
                    </category>
                    <category name="Lists" colour="%{BKY_LISTS_HUE}">
                        <block type="lists_create_empty"></block>
                        <block type="lists_create_with"></block>
                        <block type="lists_repeat">
                            <value name="NUM">
                                <shadow type="math_number">
                                    <field name="NUM">5</field>
                                </shadow>
                            </value>
                        </block>
                        <block type="lists_length"></block>
                        <block type="lists_isEmpty"></block>
                        <block type="lists_indexOf">
                            <value name="VALUE">
                                <block type="variables_get">
                                    <field name="VAR">list</field>
                                </block>
                            </value>
                        </block>
                        <block type="lists_getIndex">
                            <value name="VALUE">
                                <block type="variables_get">
                                    <field name="VAR">list</field>
                                </block>
                            </value>
                        </block>
                        <block type="lists_setIndex">
                            <value name="LIST">
                                <block type="variables_get">
                                    <field name="VAR">list</field>
                                </block>
                            </value>
                        </block>
                        <block type="lists_getSublist">
                            <value name="LIST">
                                <block type="variables_get">
                                    <field name="VAR">list</field>
                                </block>
                            </value>
                        </block>
                        <block type="lists_split">
                            <value name="DELIM">
                                <shadow type="text">
                                    <field name="TEXT">,</field>
                                </shadow>
                            </value>
                        </block>
                        <block type="lists_sort"></block>
                    </category>
                    <category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>
                    <category name="Functions" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>
                </xml>
            </div>
            <div className="code-output">
                <pre>{generatedPythonCode}</pre>
                <button className="execute-button" onClick={executeCode}>Execute</button>
            </div>
        </div>
    );
};

export default BlocklyComponent;
