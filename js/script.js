<!--
Hannah Guillen, UMass Lowell Computer Science
  hannah_guillen@student.uml.edu, hguillen@cs.uml.edu
Date: December 20, 2022
File: script.js
GUI Assignment: Implementing a Bit of Scrabble
  This file is the main JavaScript page.

Copyright (c) 2022 by Hannah Guillen. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
-->

"use strict";

var in100 = 100;
var inDrag = 99;

var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg" } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "../graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;

var scrabbleBoard = {};
scrabbleBoard.slots = [];
scrabbleBoard.slots[0] = [];
scrabbleBoard.slots[0][0] = { "multLetter": 1, "multWord": 1, "image": "../graphics_data/Scrabble_Tiles/Scrabble_noLetter.jpg"};
scrabbleBoard.slots[0][1] = { "multLetter": 1, "multWord": 1, "image": "../graphics_data/Scrabble_Tiles/Scrabble_noLetter.jpg"};
scrabbleBoard.slots[0][2] = { "multLetter": 1, "multWord": 2, "image": "../graphics_data/Scrabble_Tiles/Scrabble_dbWord.jpg"};
scrabbleBoard.slots[0][3] = { "multLetter": 1, "multWord": 1, "image": "../graphics_data/Scrabble_Tiles/Scrabble_noLetter.jpg"};
scrabbleBoard.slots[0][4] = { "multLetter": 1, "multWord": 1, "image": "../graphics_data/Scrabble_Tiles/Scrabble_noLetter.jpg"};
scrabbleBoard.slots[0][5] = { "multLetter": 1, "multWord": 1, "image": "../graphics_data/Scrabble_Tiles/Scrabble_noLetter.jpg"};
scrabbleBoard.slots[0][6] = { "multLetter": 1, "multWord": 2, "image": "../graphics_data/Scrabble_Tiles/Scrabble_dbWord.jpg"};

scrabbleBoard.rowCount = Object.keys(scrabbleBoard.slots).length;
scrabbleBoard.columnCount = Object.keys(scrabbleBoard.slots[0]).length;

var scScore = { "totalScore": 0};
scScore.calculateScore = function() {
  var row, column, tileLetter, valLetter, x = 1, score = 0;

  if (!WordIsGood()) {
    return 0;
  }

  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (column = 0; column < scrabbleBoard. columnCount; ++column) {
      tileLetter = scrabbleBoard.slots[row][column].tileLetter;
      if (tileLetter) {
        valLetter = scrabbleTiles[tileLetter].value;
        score += valLetter * scrabbleBoard.slots[row][column].multLetter;
        x *= scrabbleBoard.slots[row][column].multWord;
      }
    }
  }
  // Word modifier
  score *= x;
  return score;
}

var clFirebrick = "#B22222";
var clForestGreen = "#228B22";

// For information given by player input
scScore.refresh = function() {
  var boardScore = scScore.calculateScore();

  $("#currentScore").css("color", clFirebrick);
  $("#currentScore").html(scScore.totalScore + " (+<span id='boardScore'>" + boardScore + "</span>)");
  if (boardScore > 0) {
    $("#boardScore").css("color", clFirebrick);
  } else {
    $("#boardScore").css("color", clForestGreen);
  }
}

scScore.commit = function() {
  var boardScore = scScore.calculateScore();

  scScore.totalScore += boardScore;
  $("#currentScore").html(scScore.totalScore);
  if (scScore.totalScore > 0) {
    $("#currentScore").css("color", clFirebrick);
  }
}

// Resets score
scScore.restart = function() {
  scScore.totalScore = 0;
  $("#currentScore").html(0);
}

// Create game board
scrabbleBoard.createBoardHtml = function() {
  var row, col, image, newSlot, imgWidth = 81, imgHeight = 87, margin = 1, bdWidth = 1;

  $("#scrabBoard").css("height", (imgHeight + 2 * (margin + bdWidth)) * scrabbleBoard.rowCount);
  $("#scrabBoard").css("width", (imgWidth + 2 * (margin + bdWidth)) * scrabbleBoard.columnCount);

  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (col = 0; col < scrabbleBoard.columnCount; ++col) {
      image = scrabbleBoard.slots[row][col].image;
      newSlot = $("<div class=\"emptySlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + image + ")\" />");
      $("#scrabBoard").append(newSlot);
      newSlot.css({"width": imgWidth, "height": imgHeight, "margin": margin, "border-width": bdWidth});
    }
  }
}

// Tile images
scrabbleBoard.clearBoard = function() {
  var row, column;
  $("#scrabBoard img").remove();

  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (column = 0; column < scrabbleBoard.columnCount; ++column) {
      delete scrabbleBoard.slots[row][column].tileNumber;
      delete scrabbleBoard.slots[row][column].tileLetter;
    }
  }
}

scrabbleBoard.tileNum = function(row, column) {
  return scrabbleBoard.slots[row][column].tileNumber;
}
scrabbleBoard.tileLett = function(row, column) {
  return scrabbleBoard.slots[row][column].tileLetter;
}
scrabbleBoard.emptySlot = function(row, col) {
  return typeof(scrabbleBoard.slots[row][col].tileNumber) === "undefined";
}

scrabbleBoard.addTile = function(num, letter, row, col) {
  var r, c;

  // Replace tiles if dragged from other tile
  for (r = 0; r < scrabbleBoard.rowCount; ++r) {
    for (c = 0; c < scrabbleBoard.columnCount; ++c) {
      if (scrabbleBoard.slots[r][c].tileNumber === num) {
        delete scrabbleBoard.slots[r][c].tileNumber;
        delete scrabbleBoard.slots[r][c].tileLetter;
      }
    }
  }

  scrabbleBoard.slots[row][col].tileLetter = letter;
  scrabbleBoard.slots[row][col].tileNumber = num;
}

scrabbleBoard.deleteFromSlot = function(row, col) {
  delete scrabbleBoard.slots[row][col].tileNumber;
  delete scrabbleBoard.slots[row][col].tileLetter;
}

// Locate tile
scrabbleBoard.findEmpty = function(num) {
  var r, c;

  for (r = 0; r < scrabbleBoard.rowCount; ++r) {
    for (c = 0; c < scrabbleBoard.columnCount; ++c) {
      if (scrabbleBoard.slots[r][c].tileNumber === num) {
        return [r, c];
      }
    }
  }

  return false;
}

scrabbleBoard.printBoard = function() {
  var iRow, iCol;

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      console.log("scrabbleBoard.slots[" + iRow + "][" + iCol + "] letter: " + scrabbleBoard.slots[iRow][iCol].tileLetter + ", tileNumber: " + scrabbleBoard.slots[iRow][iCol].tileNumber);
    }
  }
}

function getFromDeck(n) {
  var hand = [];
  var totalTiles = [];

  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      var remaining = scrabbleTiles[key]["number-remaining"];
      for (var i = 0; i < remaining; ++i) {
        totalTiles.push(key);
      }
    }
  }

  for (var i = 0; i < n; ++i) {
    if (totalTiles.length) {
      var randomIndex = randomTiles(0, Object.keys(totalTiles).length - 1);
      var randomLetter = totalTiles[randomIndex];
      hand.push(randomLetter);
      --scrabbleTiles[randomLetter]["number-remaining"];
      totalTiles.splice(randomIndex, 1);
    }
  }

  $("#tilesLeft").html(totalTiles.length);

  return hand;
}
function numTilesInDeck() {
  var numTotalTiles = 0;

  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      numTotalTiles += scrabbleTiles[key]["number-remaining"];
    }
  }

  return numTotalTiles;
}

function numTilesOnRack() {
  return $("#playerLetters img").length;
}

function toggleFinishButton(toFinishButton) {
  var nextWordButton = document.getElementById("continueButton");
  if (toFinishButton) {
    nextWordButton.innerHTML = "Finish";
    nextWordButton.onclick = function(event) {
      finish();
    }
  } else {
    nextWordButton.innerHTML = "Next Word";
    nextWordButton.onclick = function(event) {
      nextWord();
    }
  }
}

// Resets the board
function reset() {

  // Clear player tiles
  $("#playerLetters img").remove();
  scrabbleBoard.clearBoard();

  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      scrabbleTiles[key]["number-remaining"] = scrabbleTiles[key]["original-distribution"];
    }
  }
  scScore.restart();
  nextWord();
}
