/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = [
    "A UFO",
    "My pet rock",
    "The local squirrel gang",
    "A time-traveling robot",
    "My invisible friend",
    "A group of angry clowns"
  ];

  let action = [
    "juggled",
    "stole",
    "exploded",
    "farted on",
    "performed a magic trick on",
    "painted"
  ];

  let what = [
    "my sandwich",
    "the neighbor's lawn",
    "my collection of rubber ducks",
    "the WiFi router",
    "my entire life savings",
    "the last slice of pizza"
  ];

  let when = [
    "during the meteor shower",
    "while I was talking to my goldfish",
    "before I could finish my cereal",
    "while riding a unicycle",
    "after I accidentally summoned a demon",
    "in the middle of a karaoke contest"
  ];

  const excuseRandom = listEl => {
    return listEl[Math.floor(Math.random() * listEl.length)];
  };

  let excuseGen = document.querySelector("#excuse");

  if (excuseGen) {
    excuseGen.innerHTML =
      excuseRandom(who) +
      " " +
      excuseRandom(action) +
      " " +
      excuseRandom(what) +
      " " +
      excuseRandom(when);
  } else {
    console.error("Elemento #excuse no encontrado en el DOM");
  }
};
