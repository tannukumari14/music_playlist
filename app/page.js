import "./globals.css";
import Search from "./Search";
import MusicDisplay from "./MusicDisplay";

const page =() => {
  return (
    <div className="container">
      <Search />
      <div className="inside-container">
        <MusicDisplay music={{ title: "Never Gonna Give You Up", artist: "Rick Astley" }} />
        <MusicDisplay music={{ title: "Take On Me", artist: "a-ha" }} />
        <MusicDisplay music={{ title: "Africa", artist: "Toto" }} />
      </div>
    </div>
  )
}
export default page;