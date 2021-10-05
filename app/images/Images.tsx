import { Image } from "blitz";
import men from './men.jpg';

const imgsrc = "https://images.unsplash.com/photo-1533709038230-b099e6f76088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80";

function Images() {
  return (
    <>
      <h1>My Imagepage</h1>
      <Image
        src={men}
        alt="Picture of the author"
        height={300}
        width={300}
      />
      <p>Welcome to my Imagepage!</p>
    </>
  )
}

export default Images
