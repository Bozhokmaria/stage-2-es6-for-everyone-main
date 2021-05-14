import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
  });
}

export function getDamage(attacker, defender) {
  // return damage
  const damage = getHitPower(attacker) - getBlockPower(defender);
  
  if(damage < 0) {
    damage = 0;
  }
  
  return damage;
}

export function getHitPower(fighter) {
  // return hit power
  const criticalHitChance = Math.random()*10 - 8;
  const hitPower = fighter.attack * criticalHitChance;
  return hitPower;
}

export function getBlockPower(fighter) {
  // return block power
  const dodgeChance = Math.random()+10 - 8;
  const blockPower = fighter.defense * dodgeChance;
  return blockPower;
}
