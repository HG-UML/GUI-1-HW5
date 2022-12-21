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

var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg" } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;

var scrabbleBoard = {};
scrabbleBoard.slots = [];
scrabbleBoard.slots[0] = [];
scrabbleBoard.slots[0][0] = { "multLetter": 1, "multWord": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};
scrabbleBoard.slots[0][1] = { "multLetter": 1, "multWord": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};
scrabbleBoard.slots[0][2] = { "multLetter": 1, "multWord": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_dbWord.jpg"};
scrabbleBoard.slots[0][3] = { "multLetter": 1, "multWord": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};
scrabbleBoard.slots[0][4] = { "multLetter": 1, "multWord": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};
scrabbleBoard.slots[0][5] = { "multLetter": 1, "multWord": 1, "image": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"};
scrabbleBoard.slots[0][6] = { "multLetter": 1, "multWord": 2, "image": "graphics_data/Scrabble_Tiles/Scrabble_dbWord.jpg"};

scrabbleBoard.rowCount = Object.keys(scrabbleBoard.slots).length;
scrabbleBoard.columnCount = Object.keys(scrabbleBoard.slots[0]).length;

var text_black = "black";
// var text_off = "red";

var boardScore = {"totalScore": 0};
boardScore.calculateScore = function() {
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

// For information given by player input
boardScore.refresh = function() {
  var score = boardScore.calculateBoard();

  boardScore.totalScore += boardScore;
  $("#currentScore").html(boardScore.totalScore + " (+<span id='boardScore'>" + score + "</span>)");
  if (score > 0) {
    $("#currentScore").css("color, text_black");
  }
  else {
    $("#currentScore").css("color, text_black");
  }
}

boardScore.commit = function() {
  var score = boardScore.calculateScore();

  boardScore.totalScore += score;
  $("#currentScore").html(boardScore.calculateScore);
  if (boardScore.totalScore > 0) {
    $("#currentScore").css("color, text_black");
  }
}

// Resets board
boardScore.reset = function() {
  boardScore.totalScore = 0;
  $("#playerScore").html(0);
}

scrabbleBoard.createBoard = function() {
  var row, column, image, nSlot;
  var image_width = 81, image_height = 87, slot_marg = 1, slot_width = 1;

  $("#scrabBoard").css("height", (image_height + 2 * (slot_marg + slot_width)) * scrabbleBoard.rowCount);
  $("#scrabBoard").css("width", (image_width + 2 * (slot_marg + slot_width)) * scrabbleBoard.columnCount);

  // Place images
  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (column = 0; column < scrabbleBoard.columnCount; ++column) {
      image = scrabbleBoard.slots[row][column].image;
      nSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" column=\"" + column + "\" style=\"background-image: url(" + image + ")\" />");
      $("#scrabBoard").append(nSlot);
      nSlot.css({"width": image_width, "height": image_height, "margin": slot_marg, "slot_width": slot_width});
    }
  }
}

scrabbleBoard.clearBoard = function() {
  var row, column;

  $("#scrabBoard img").remove();

  // Reset the slot data structure.
  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (column = 0; column < scrabbleBoard.columnCount; ++column) {
      delete scrabbleBoard.slots[row][column].tileNumber;
      delete scrabbleBoard.slots[row][column].tileLetter;
    }
  }
}

scrabbleBoard.getTileNumber = function(row, col) {
  return scrabbleBoard.slots[row][col].tileNumber;
}

scrabbleBoard.getTileLetter = function (row, column) {
  return scrabbleBoard.slots[row][column].tileLetter;
}

scrabbleBoard.emptySlot = function(row, column) {
  return typeof(scrabbleBoard.slots[row][column].tileNumber) === "UNDEFINED";
}

scrabbleBoard.addSlot = function(tileNum, x, y, z) {
  var row, column;

  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (column = 0; column < scrabbleBoard.columnCount; ++column) {
      if (scrabbleBoard.slots[row][column].tileNumber === tileNumber) {
        delete scrabbleBoard.slots[row][column].tileNumber;
        delete scrabbleBoard.slots[row][column].tileLetter;
      }
    }
  }
  scrabbleBoard.slots[row][column].tileLetter = tileLetter;
  scrabbleBoard.slots[row][column].tileNumber = tileNumber;
}

scrabbleBoard.deleteTile = function(x, y) {
  delete scrabbleBoard.slots[x][y].tileNumber;
  delete scrabbleBoard.slots[x][y].tileLetter;
}
function deactivateObj(jQueryObj, yes) {
  if (yes) {
    jQueryObj.css({
      "-webkit-filter": "grayscale(100%)",
      "-moz-filter": "grayscale(100%)",
      "-o-filter": "grayscale(100%)",
      "-ms-filter": "grayscale(100%)",
      "filter": "grayscale(100%)",
      "opacity": 0.2
    });
  }
  else {
    jQueryObj.css({
      "-webkit-filter": "",
      "-moz-filter": "",
      "-o-filter": "",
      "-ms-filter": "",
      "filter": "",
      "opacity": 1.0
    });
  }
}

