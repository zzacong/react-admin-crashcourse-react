import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

export default function UsersCreate(props) {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  )
}
