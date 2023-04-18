import React, { ChangeEventHandler, useState } from 'react';
import { IPersonInformation } from '../../../@types/signature';
import TextInput from './TextInput';
import { Link } from 'react-router-dom';
const Form = () => {

  const [personInformation, setPersonInformation] = useState<IPersonInformation>()
  const [signatureType, setSignatureType] = useState<string>("html")
  const [company, setCompany] = useState<string>("dc")

  const updatePersonInformation: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
    const newPersonInformation = { ...personInformation } as IPersonInformation
    //@ts-ignore
    newPersonInformation[event.target.name] = event.target.value
    setPersonInformation(newPersonInformation)
  }

  const updateSignatureType : ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSignatureType(event.target.value)
  }

  const updateCompany : ChangeEventHandler<HTMLSelectElement> = (event) => {
    setCompany(event.target.value)
  }

  return (
    <form onSubmit={(event) => { event.preventDefault() }}>
      
      <TextInput name="fullName" onChange={updatePersonInformation} />
      <TextInput name="role" onChange={updatePersonInformation} />

      <select id="company" name="company" onChange={updateCompany}>
        <option value="dc">Diverse City</option>
        <option value="eb">Extraordinary Bodies</option>
      </select>

      <select id="signature_type" name="signatureType" onChange={updateSignatureType}>
        <option value="html">html</option>
        <option value="outlook">outlook</option>
        <option value="gmail">gmail</option>
      </select>

      
      <Link to={`/${company}/${signatureType}`} state={personInformation}>Get Signature</Link>

    </form>
  )
}

export default Form;