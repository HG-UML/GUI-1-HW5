<!--
Hannah Guillen, UMass Lowell Computer Science
  hannah_guillen@student.uml.edu, hguillen@cs.uml.edu
Date: December 20, 2022
File: options.js
GUI Assignment: Implementing a Bit of Scrabble
  This JavaScript page checks user word for validation. It also contains
  all options given to the user, such as CLEAR BOARD, CHECK WORD, and UNDO.

Copyright (c) 2022 by Hannah Guillen. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
-->

// Check if user input string is in the dictionary
function DictionaryCheck(playerWord) {
  return !!(playerWord.length > 0 && DictionaryCheck.dict[playerWord]);
}

// Look up using dictionary and ajax
DictionaryCheck.dict = {};
$.ajax({
  url: "/dict.txt", success: function (result) {
    var arWords = result.split("\n");

    for (var i = 0; i < arWords.length; ++i) {
      DictionaryCheck.dict[arWords[i].toUpperCase()] = true;
    }
  }
})

function WordIsGood() {
  var column, letter, count, playerWord = " ", row = 0;

  for (column = 0; column < scrabbleBoard.columnCount; ++column) {
    letter = scrabbleBoard.getLetter(row, column);
    if (typeof(letter) === "undefined") {
      // Use underscore to show user when there is a space between letters
      playerWord += "\5F";
    }
    else {
      playerWord += letter;
    }
  }
  $("#currentWord").html(playerWord);
  var validWord = "green";
  var invalidWord = "red";

  // Check for input errors
  count = 0;
  if (playerWord == "") {
    IsWordValid(false);
    ++count;
  }
  else {
    var SpaceInWord = new RegExp("[A-Z_]\5F+[A-Z_]")
    if (SpaceInWord.test(playerWord)) {
      IsWordValid(false);
      ++count;
    }
    else {
      IsWordValid(true);
    }
  }

  // Word must have at least 2 letters
  if (playerWord.length >= 2) {
    IsMinValid(true);
  }
  else {
    IsMinValid(false);
    ++count;

  }

  // Dictionary look-up
  if (DictionaryCheck(playerWord)) {
    IsInDict(true);
  }
  else {
    IsInDict(false);
    ++count;
  }

  if (count) {
    document.getElementById("nextWordButton").disabled = true;
    $("#playerWord").css("color", validWord);
    return false;
  }

  $("#playerWord").css("color", invalidWord);
  document.getElementById("nextWordButton").disabled = false;
  return playerWord;
}

function IsMinValid(valid) {
  if (valid) {
    deactivateObj($("#minLengthIcon"), false);
  }
  else {
    deactivateObj($("#minLengthIcon"), true);
  }
}

// If each function is invalid, check icon will show
function IsWordValid(invalid) {
  if (invalid) {
    deactivateObj($("#oneWordCheckIcon"), false);
  }
  else {
    deactivateObj($("#oneWordCheckIcon"), true);
  }
}
function IsInDict(valid) {
  if (valid) {
    deactivateObj($("#dictionaryCheckIcon"), false);
  }
  else {
    deactivateObj($("#dictionaryCheckIcon"), true);
  }
}
