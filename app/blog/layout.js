export const metadata = {
  title: "Create Blog",
  description: "Description Blog",
};
export default function BlogLayout({ children }) {
  return (
    <>
      { children }
      <p>More info .....</p>
    </>
  )
}
