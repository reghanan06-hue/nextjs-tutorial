import React from 'react'

export default async function PageFriendspage({ params }) {
  const parameters = await params;
  const name = parameters.name;
  const friendName = parameters.friendName;
  
  return (
    <div>
      <h1>{friendName} is a friend of {name}</h1>
    </div>
  )
}
