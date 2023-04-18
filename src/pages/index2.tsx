import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const TestPage: React.FunctionComponent = () => {

  const [ testString, setTestString ] = useState<string>()

  const updateText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTestString(event.target.value)
  }

  const { state } = useLocation()

  useEffect(() => {
    if(state) setTestString(state.testData)
  }, [state])

  return (<>
    <div>Input text here: </div>
    <input onChange={updateText} value={testString}></input>
    <div>Text currently is: {testString}</div>
    <div>Text recived from other index is: {state ? state.testData : ''}</div>
    <Link to='/1' state={{ testData: testString }} >
      Go To Index - 1
    </Link>
  </>)
}

export default TestPage