import './App.css'
import CheckBoxComponent from './checkbox/CheckBoxComponent'
import {useState} from "react";

function App() {
    const  [smallChecked, setSmallChecked] = useState(false);
    const  [mediumChecked, setMediumChecked] = useState(false);
    const  [smallOneChecked, setSmallOneChecked] = useState(true);
    const  [mediumOneChecked, setMediumOneChecked] = useState(true);

    return (
        <>
            <main>
                <section>
                    <CheckBoxComponent size="small" ariaLabel="Toggle button" checked={smallChecked} onChange={setSmallChecked}/>
                    <CheckBoxComponent size="medium" ariaLabel="Toggle button" checked={mediumChecked} onChange={setMediumChecked}/>
                </section>
                <section>
                    <CheckBoxComponent size="small" ariaLabel="Toggle button" checked={smallOneChecked} onChange={setSmallOneChecked}/>
                    <CheckBoxComponent size="medium" ariaLabel="Toggle button" checked={mediumOneChecked} onChange={setMediumOneChecked}/>
                </section>
            </main>
        </>
    )
}

export default App
