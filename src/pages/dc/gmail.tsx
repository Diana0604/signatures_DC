import React from 'react';
import { useLocation } from 'react-router-dom';
import {SIGNATURE} from './constants'

const Gmail: React.FunctionComponent = () => {
  const { state } = useLocation()

  return SIGNATURE(state)
}

export default Gmail