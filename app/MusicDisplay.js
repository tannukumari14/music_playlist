import Link from "next/link";
import "./MusicDisplay.css";

const MusicDisplay = () => {
  return (
    <div className="music-container">
      {/* 1 */}
      <div className="music-displayer">
        <Link href="Data">
          <img href="Data" className="images" src="buhe-vich.jpg" alt="Buhe Vich" />
        </Link>
      </div>

      {/* 2 */}
      <div className="music-displayer">
        <Link href="/Data/Song1">
          <img href="/Data/Song1" className="images" src="maan-bharya.jpg" alt="Maan Bharya" />
        </Link>
      </div>

      {/* 3 */}
      <div className="music-displayer">
        <Link href="/buhe-vich">
          <img className="images" src="o-patner.jpg" alt="O Patner" />
        </Link>
      </div>

      {/* 4 */}
      <div className="music-displayer">
        <Link href="/buhe-vich">
          <img className="images" src="dil-ko-kaker.jpg" alt="Dil Ko Karker" />
        </Link>
      </div>

      {/* 5 */}
      <div className="music-displayer">
        <Link href="/buhe-vich">
          <img className="images" src="tu-hai-wahi.jpg" alt="Tu Hai Wahi" />
        </Link>
      </div>

      {/* 6 */}
      <div className="music-displayer">
        <Link href="/buhe-vich">
          <img className="images" src="saki-saki.jpg" alt="Saki Saki" />
        </Link>
      </div>
      
    </div>
  );
}

export default MusicDisplay;
