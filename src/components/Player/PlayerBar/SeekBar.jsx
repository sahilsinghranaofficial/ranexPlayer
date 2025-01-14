import player from "../../../lib/player";
import {currentSongAtom} from "../../../store/atoms/playerAtom";
import {debounce, formatTimeStampForSongDuration} from "../../../utils/helpers";

import {useAtom} from "jotai";
import {memo} from "react";

const SeekBar = () => {
  return (
    <div className="w-full p-0 m-0">
      <SeekInput />
      <SeekTimeLabels />
    </div>
  );
};

const SeekInput = memo(() => {
  const [currentSong] = useAtom(currentSongAtom);
  const meta = currentSong?.meta || {};
  return (
    <input
      type="range"
      min={0}
      value={meta?.currentTime}
      max={meta?.duration}
      className="w-full py-0 mx-1 my-0 cursor-grab active:cursor-grabbing accent-accent-8 seekbar"
      onChange={(e) => debounce(player.seek, 150)(e.target.value)}
    />
  );
});

const SeekTimeLabels = () => {
  const [currentSong] = useAtom(currentSongAtom);
  const meta = currentSong?.meta || {};
  return (
    <div className="flex justify-between w-full px-2 py-1 my-1 text-xs text-neutral-100/70">
      <p>{formatTimeStampForSongDuration(meta?.currentTime)}</p>
      <p>{formatTimeStampForSongDuration(meta?.duration)}</p>
    </div>
  );
};

export default memo(SeekBar);
