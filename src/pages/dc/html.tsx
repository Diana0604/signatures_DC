import React from 'react';
import { useLocation } from 'react-router-dom';
import {SIGNATURE_HTML} from './constants'

const Html: React.FunctionComponent = () => {

  const { state } = useLocation()

  console.log(state)

  return <>{SIGNATURE_HTML(state)}</>
}

export default Html