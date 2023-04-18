import React from 'react';
import { useLocation } from 'react-router-dom';
import {SIGNATURE} from './constants'

const Gmail: React.FunctionComponent = () => {
  const { state } = useLocation()

  const stateDisplay: React.ReactElement<string>[] = []
  Object.keys(state).forEach((key) => {
    stateDisplay.push(<div>{key}: {state[key]}</div>)
  })

  return SIGNATURE(state)
}

export default Gmail