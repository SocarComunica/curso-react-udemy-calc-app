/* eslint no-eval: 0 */
import {useState} from "react";
import words from 'lodash.words';
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

import './App.css';

const App = () => {
    const [stack, setStack] = useState("");

    const items = words(stack, /[^-^+^*^/]+/g);

    return (
        <main className="react-calculator">
            <Result value={items.length > 0 ? items[items.length - 1] : '0'}/>

            <Numbers onClickNumber={(number: string) => setStack(`${stack}${number}`)}/>

            <Functions onContentClear={() => setStack("")}
                       onDelete={() => {
                           if (stack.length > 0)
                               setStack(stack.substring(0, stack.length - 1))
                       }}/>

            <MathOperations onClickOperation={(text: string) => setStack(`${stack}${text}`)}
                            onClickEqual={() => setStack(eval(stack).toString())}/>
        </main>
    );
}

export default App;
