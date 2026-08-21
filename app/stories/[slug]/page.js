export const generateMetadata= async ({params})=>{
     const parameters=await params;
  const slug = parameters.slug;
  return{
title :   slug,
    description:"Description  of " + slug
  }



}
export default  async function Storiespage({params}) {
  const parameters=await params;
  const slug = parameters.slug;
  return (
    <div>
      <h1> welcome page stories</h1>
      <p>{slug}</p>
    </div>
  )
}
