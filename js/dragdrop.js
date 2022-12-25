<!--
Hannah Guillen, UMass Lowell Computer Science
  hannah_guillen@student.uml.edu, hguillen@cs.uml.edu
Date: December 20, 2022
File: dragdrop.js
GUI Assignment: Implementing a Bit of Scrabble
  This JavaScript file implements the drag and drop methods so player
  can freely drag and drop tiles to game board.

  Credit: yongcho.github.io/GUI-Programming-1/assignment9.html

Copyright (c) 2022 by Hannah Guillen. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
-->

function blankTiles(dragTiles, tile, row, col) {
  var tileSelectorDialog = $("<div id='blankTileDialog'></div>");
  var letterKey, newTile;
  for (letterKey in scrabbleTiles) {
    if (letterKey != "_") {
      newTile = $("<img src='" + scrabbleTiles[letterKey]["image"] + "' class='letterTiles' letter='" + letterKey + "'>");

      newTile.click(function() {
        var newLetter = $(this).attr("letter");

        // Replace the letter attribute and the image source of the draggable tile img.
        dragTiles.attr("letter", newLetter);
        dragTiles.attr("src", scrabbleTiles[newLetter]["image"]);
        tile = dragTiles.attr("id");
        scrabbleBoard.addTile(tile, newLetter, row, col);
        WordIsGood();
        scScore.refresh();

        tileSelectorDialog.dialog("close");
      });
      tileSelectorDialog.append(newTile);
    }
  }
  tileSelectorDialog.css("z-index", in100);
  tileSelectorDialog.dialog({
    modal: true,
    draggable: false,
    resizable: false
  });
}


$(window).load(function() {
  var row, col;

  scrabbleBoard.createBoardHtml();

  // Makes droppable tiles possible
  $(".emptySlot").droppable({
    accept: function(draggable) {
      var row, col;

      row = $(this).attr("row");
      col = $(this).attr("col");

      if (scrabbleBoard.tileNum(row, col) === draggable.attr("id")) {
        return true;
      } else if (scrabbleBoard.emptySlot(row, col)) {
        return true;
      } else {
        return false;
      }
    },
    drop: function(event, ui) {
      var row, col, letter, tile, previousPositionOnBoard;

      ui.draggable.removeClass("tileRack");
      ui.draggable.addClass("tileBoard");

      row = $(this).attr("row");
      col = $(this).attr("col");

      letter = ui.draggable.attr("letter");
      tile = ui.draggable.attr("id");

      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);

      console.log("Dropped " + letter + " (" + tile + ") on (" + row + ", " + col + ").");

      previousPositionOnBoard = scrabbleBoard.findEmpty(tile);
      if ($(ui.draggable).hasClass("blankTile") && !previousPositionOnBoard) {
        blankTiles($(ui.draggable), tile, row, col);
      } else {
        scrabbleBoard.addTile(tile, letter, row, col);
        WordIsGood();
        scScore.refresh();
      }
    }
  });

  $("#playerLetters").droppable({
    tolerance: "touch",
    drop: function(event, ui) {
      var tile, word, pos;

      ui.draggable.removeClass("tileBoard");
      ui.draggable.addClass("tileRack");

      if ($(ui.draggable).hasClass("blankTile")) {
        $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
      }

      tile = ui.draggable.attr("id");
      pos = scrabbleBoard.findEmpty(tile);
      if (pos) {
        scrabbleBoard.deleteFromSlot(pos[0], pos[1]);

        $("#playerLetters").append(ui.draggable);
        ui.draggable.css({"position": "relative", "top": "", "left": ""});

        word = WordIsGood();

        // Calculate score
        scScore.refresh();
      } else {
        ui.draggable.draggable("option", "revert", true);
      }
    }
  });

  reset();
});

function nextWord() {
  var i, key, tileImageId, newTile, hand;

  scScore.commit();
  scrabbleBoard.clearBoard();

  // Respawn tiles until 7 are on player rack
  hand = getFromDeck(7 - numTilesOnRack());
  for (i = 0; i < hand.length; ++i) {
    key = hand[i];
    tileImageId = generateTileId();
    newTile = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"lettTile\" letter=\"" + key + "\" />");
    if (key == "_") {
      newTile.addClass("blankTile");
    }
    // Tile image
    $("#playerLetters").append(newTile);

    newTile.addClass("onRack");

    newTile.draggable({
      revertDuration: 200,  // msec
      start: function(event, ui) {
        $(this).css("z-index", inDrag);

        $(this).draggable("option", "revert", "invalid");
      },
      stop: function() {
        $(this).css("z-index", "");
      }
    });
  }

  $("#currentWord").html("");

  wordGapCheck(false);
  minimumCheck(false);
  wordDictCheck(false);

  if (numTilesInDeck() == 0) {
    toggleFinishButton(true);
    document.getElementById("continueButton").disabled = false;
  } else {
    document.getElementById("continueButton").disabled = true;
  }
}

function finish() {
  scScore.commit();

  document.getElementById("continueButton").disabled = true;

  $(".lettTile").draggable("disable");
}

function generateTileId() {
  var id;

  generateTileId.id = ++generateTileId.id || 1;
  id = "tile" + generateTileId.id.toString();

  return id;
}

function randomTiles(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Deactivate object using jQuery
function deactivateObj(jQueryObject, yes) {
  if (yes) {
    jQueryObject.css({
      "-webkit-filter": "grayscale(100%)",
      "-moz-filter": "grayscale(100%)",
      "-o-filter": "grayscale(100%)",
      "-ms-filter": "grayscale(100%)",
      "filter": "grayscale(100%)",
      "opacity": 0.2
    });
  } else {
    jQueryObject.css({
      "-webkit-filter": "",
      "-moz-filter": "",
      "-o-filter": "",
      "-ms-filter": "",
      "filter": "",
      "opacity": 1.0
    });
  }
}

