import Character from "../domain.js";
import Game, { 
  GameSavingData, 
  readGameSaving as loadGame, 
  writeGameSaving as saveGame 
} from "../game.js";

export {Game, GameSavingData, loadGame, saveGame, Character};

import "../app.js";
