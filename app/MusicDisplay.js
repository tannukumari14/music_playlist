import Link from "next/link";
import "./MusicDisplay.css";

const MusicDisplay = () => {
  return (
    <div className="music-container">
      {/* 1 */}
      <div className="music-displayer">
        <Link href="/buhe-vich">
          <img className="images" src="buhe-vich.jpg" alt="Buhe Vich" />
        </Link>
      </div>
      {/* 2 */}
      <div className="music-displayer">
        <img className="images" src="maan-bharya.jpg" alt="Maan Bharya" />
      </div>
      {/* 3 */}
      <div className="music-displayer">
        <img className="images" src="o-patner.jpg" alt="O Patner" />
      </div>
      {/* 4 */}
      <div className="music-displayer">
        <img className="images" src="dil-ko-kaker.jpg" alt="Dil Ko Karker" />
      </div>
      {/* 5 */}
      <div className="music-displayer">
        <img className="images" src="tu-hai-wahi.jpg" alt="Tu Hai Wahi" />
      </div>
      {/* 6 */}
      <div className="music-displayer">
        <img className="images" src="saki-saki.jpg" alt="Saki Saki" />
      </div>
    </div>
  );
}

export default MusicDisplay;
