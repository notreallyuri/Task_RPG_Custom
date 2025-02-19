import { charType, mainCharType } from "../../interfaces";

const enemies: charType[] = [];

const allies: mainCharType[] = [];

let player: mainCharType = {
  name: "",
  health: 10,
  mana: 15,
  atk: 5,
  critChance: 0,
  level: 0,
  exp: 0,
};

const expToNextLevel = [100, 300, 600, 1000, 1500];

export function gainExp(expGained: number) {
  player.exp += expGained;
  for (let i = player.level; i < expToNextLevel.length; i++) {
    if (player.exp >= expToNextLevel[i]) {
      player.level++;
      console.log(`Level Up!!`);
    }
  }
}

export function expThreshold(): number {
  if (player.level < expToNextLevel.length){
    const nextLevelExp = expToNextLevel[player.level]
    return nextLevelExp - player.exp
  } else {
    return 0
  }
}


gainExp(120);
console.log(`Current Level: ${player.level}, current exp: ${player.exp}`);
console.log(`Exp to next level: ${expThreshold()}`)
