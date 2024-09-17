const MusicDisplay = ({ music }) => {
  return (
    <div>
      <h1>{music.title}</h1>
      <h2>{music.artist}</h2>
    </div>
  );
}
export default MusicDisplay;