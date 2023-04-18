import React from "react"

const nameRolePairs = {
  html: "Get HTML Signature",
  outlook: "Get Outlook Signature",
  gmail: "Get Gmail Signature"
}

interface ISignatureTypeProps {
  name: "html" | "outlook" | "gmail",
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void,
  value?: string,
}

const SignatureTypeInput: React.FC<ISignatureTypeProps> = (props) => {
  const properties: ISignatureTypeProps = { ...props }
  properties.value = nameRolePairs[props.name]
  return (
    <input
      type="submit"
      name={properties.name}
      value={properties.value}
      onClick={properties.onClick}
    />
  )
}

export default SignatureTypeInput