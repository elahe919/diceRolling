import React, { useState } from "react";
import dice_1 from "../assets/dice-1.svg";
import dice_2 from "../assets/dice-2.svg";
import dice_3 from "../assets/dice-3.svg";
import dice_4 from "../assets/dice-4.svg";
import dice_5 from "../assets/dice-5.svg";
import dice_6 from "../assets/dice-6.svg";

function Main() {
  const [shakeDice, setShakeDice] = useState(false);
  const [leftBoxRandom, setLeftBoxRandom] = useState(1);
  const [rightBoxRandom, setRightBoxRandom] = useState(1);

  const rollDice = () => {
    setShakeDice(true);

    const randomLeft = Math.floor(Math.random() * 6) + 1;
    const randomRight = Math.floor(Math.random() * 6) + 1;
    setLeftBoxRandom(randomLeft);
    setRightBoxRandom(randomRight);

    setTimeout(() => {
      setShakeDice(false);
    }, 700); 
  };

  const diceImage = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6,
  };

  return (
    <>
      <div className="flex justify-between [&>*]:bg-indigo-600 [&>*]:w-60 [&>*]:h-60 [&>*]:m-10 [&>*]:rounded-xl">
        <div className={shakeDice ? "Die-shaking" : ""}>
          <img
            className="w-60"
            src={diceImage[leftBoxRandom]}
            alt={`Dice ${leftBoxRandom}`}
          />
        </div>
        <div className={shakeDice ? "Die-shaking" : ""}>
          <img
            className="w-60 Die"
            src={diceImage[rightBoxRandom]}
            alt={`Dice ${rightBoxRandom}`}
          />
        </div>
      </div>
      <button
        className={`p-5 ${ shakeDice ? "bg-indigo-300 text-black" : "text-white bg-black"} w-1/2 mt-10 text-xl`}
        onClick={rollDice}
      >
        {
         shakeDice ? "Rolling ..." : "Roll Dice !" 
        }
      </button>
    </>
  );
}

export default Main;


