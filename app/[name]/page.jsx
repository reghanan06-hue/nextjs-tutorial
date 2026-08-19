import React from 'react'

export default async function Page({ params }) {
    const parameters = await params;
  const name = parameters.name;
  return (
    <div>
      <h1>Welcome {name}!</h1>
    </div>
  )
}
