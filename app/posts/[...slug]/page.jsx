import React from 'react'

export default async function ArticlePage({params}) {
  const parameters = await params;
  const slug = parameters.slug;
if(slug.length ==1){
  return (
    <div>
      <h1>Welcome : {slug[0]}</h1>
    </div>
  )
}

  return (
    <div>
      <h1>Welcome to the article! {slug}</h1>
    </div>
  )
}
