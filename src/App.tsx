"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty pwease",
      "With a subway cookie on top",
      "What about a hot koi",
      "PLEASE BABY",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to yeow keng's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/kakao-friends-maltese-2/sticker_18.gif?2c6fdcc4309d47e71508a6c75bf97f0f&d=200x200" />
          <div className="my-4 text-4xl font-bold">YAYAYAY!!! I love you baby!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/kakao-friends-maltese-2/sticker_14.gif?2c6fdcc4309d47e71508a6c75bf97f0f&d=200x200"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
