export const generateMetadata= async ({params})=>{
     const parameters=await params;
  const slug = parameters.slug;
  return{
title :   slug,
    description:"Description  of " + slug
  }



}
export default  async function Storiespage({params,searchParams}) {
  const parameters=await params;
  const slug = parameters.slug;
  const {filter,lang} =await searchParams;
  console.log(filter);
    console.log(lang);

  return (
    <div>
      <h1> welcome page stories</h1>
      <p>{slug}</p>
      <p>{filter}</p>
       <p className="text-red-800 font-bold">{lang}</p>
    </div>
  )
}
