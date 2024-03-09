import React, {useRef, useState, useEffect} from 'react';
import '../styling/Sandbox.css';

function Sandbox() {
    const textareaRef = useRef();
    const iframeRef = useRef();

    // Use dbData as the initial state
    const [code, setCode] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/functionData')
            .then(response => response.json())
            .then(data => {
                setCode(data.functionString);
            })
            .catch(error => {
                console.error('Error fetching function data:', error);
            });
    }, []);

    const runCode = () => {
        //get the code from the text area
        const code  = textareaRef.current.value;

        let result;
        try {
            //create a new function from the code
            const func = new Function('return ' + code);

            //execute the function and get the result
            const returnedFunction = func();
            result = returnedFunction();
        } catch (error) {
            console.error('Error executing function:', error);
            result = 'Error executing function: ' + error.message;
    }
        
        //create a blob object representing a file with the code content
        const blob = new Blob([String(result)], { type: 'text/html' });

        //use createObjectURL to create a URL for the blob
        const url = URL.createObjectURL(blob);

        //set the iframe's src to the URL of the blob
        iframeRef.current.src = url;
    };

    return (
        <div className='sandbox-container'>
            <textarea ref={textareaRef} rows="20" cols="50" defaultValue={code} />
            <button onClick={runCode}>Run</button>
            <iframe ref={iframeRef} title="output" />
        </div>
    )
}
export default Sandbox;