<!--
Hannah Guillen, UMass Lowell Computer Science
  hannah_guillen@student.uml.edu, hguillen@cs.uml.edu
Date: December 20, 2022
File: options.js
GUI Assignment: Implementing a Bit of Scrabble
  This JavaScript file checks user word for validation. It also contains
  all options given to the user, such as CLEAR BOARD, CHECK WORD, and UNDO.

Copyright (c) 2022 by Hannah Guillen. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
-->

// Check if user input string is in the dictionary
function DictionaryWordCheck(playerWord) {
  return !!(playerWord.length > 0 && DictionaryWordCheck.dict[playerWord]);
}

// Look up using dictionary with ajax
DictionaryWordCheck.dict = {};
$.ajax({
  url: "../dict.txt",
  success: function(result) {
    var w = result.split("\n");

    for (var i = 0; i < w.length; ++i) {
      DictionaryWordCheck.dict[w[i].toUpperCase()] = true;
    }
  }
});

function WordIsGood() {
  var column, letter, count, playerWord = "", row = 0;

  for (column = 0; column < scrabbleBoard.columnCount; ++column) {
    letter = scrabbleBoard.tileLett(row, column);
    if (typeof(letter) === "undefined") {
      playerWord += "\5F"; // underscore "_" used for space
    }
    else {
      playerWord += letter;
    }
  }
  $("#currentWord").html(playerWord);
  var validWord = "green";
  var invalidWord = "red";

  count = 0;

  // If player word is equal to no string
  if (playerWord == "") {
    wordGapCheck(false);
    ++count;
  }
  else {
    var SpaceInWord = new RegExp("[A-Z_]\5F+[A-Z_]")
    if (SpaceInWord.test(playerWord)) {
      wordGapCheck(false);
      ++count;
    }
    else {
      wordGapCheck(true);
    }
  }

  // Word must have at least 2 letters
  if (playerWord.length >= 2) {
    minimumCheck(true);
  } else {
    minimumCheck(false);
    ++count;
  }

  // Dictionary look-up
  if (DictionaryWordCheck(playerWord)) {
    wordDictCheck(true);
  } else {
    wordDictCheck(false);
    ++count;
  }

  if (count) {
    document.getElementById("continueButton").disabled = true;
    $("#currentWord").css("color", clForestGreen);
    return false;
  }

  $("#currentWord").css("color", clFirebrick);
  document.getElementById("continueButton").disabled = false;
  return playerWord;
}

// Used to show brown check mark if each test is passed
function minimumCheck(valid) {
  if (valid) {
    deactivateObj($("#minCheck"), false);
  } else {
    deactivateObj($("#minCheck"), true);
  }
}

function wordGapCheck(valid) {
  if (valid) {
    deactivateObj($("#gapCheck"), false);
  } else {
    deactivateObj($("#gapCheck"), true);
  }
}

function wordDictCheck(valid) {
  if (valid) {
    deactivateObj($("#dictionaryCheck"), false);
  } else {
    deactivateObj($("#dictionaryCheck"), true);
  }
}
