import React, { ChangeEventHandler } from "react"

const nameRolePairs = {
  fullName: "Full Name",
  role: "Company Role",
  phoneNumber: "Telephone Number",
  email: "Email"
}

interface inputProps {
  name: "fullName" | "role" | "phoneNumber" | "email",
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
  placeholder?: string,
}

const Input: React.FC<inputProps> = (props) => {
  const properties: inputProps = { ...props }
  properties.placeholder = nameRolePairs[props.name]
  return (
    <input
      type="text"
      name={properties.name}
      placeholder={properties.placeholder}
      onChange={properties.onChange}
    />
  )
}

export default Input