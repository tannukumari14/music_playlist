import "./globals.css";
import Search from "./Search";
import MusicDisplay from "./MusicDisplay.js";

const page =() => {
  return (
    <div className="container">
      <Search />
      <div className="inside-container">
        <MusicDisplay />
      </div>
    </div>
  )
}
export default page;