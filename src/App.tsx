import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

import './App.css';

const App = () => (
    <main className="react-calculator">
        <Result value="0"/>
        <Numbers onClickNumber={(number: string) => console.log("OnClickNumber: ", number)}/>
        <Functions onContentClear={() => console.log("OnContentClear")}
                   onDelete={() => console.log("OnDelete")}/>
        <MathOperations onClickOperation={(text: string) => console.log("Operation: ", text)}
                        onClickEqual={(equal: string) => console.log("Equal: ",equal)}/>
    </main>
);

export default App;
