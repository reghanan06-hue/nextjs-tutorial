import Link from "next/link";
export const metadata={
    title : "Stories",
    description:"Page of scories"

}
export default function Storiespage() {
  return (
    <div>
      <h1> welcome page stories</h1>
     <Link href="/stories/first-story?filter=javascript">First story</Link>
     <Link href="/stories/first-story?filter=python">Second story</Link>
     <Link href="/stories/first-story?filter=nextjs">third story</Link>


    </div>
  )
}
