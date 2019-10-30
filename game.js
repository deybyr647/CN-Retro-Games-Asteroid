
// game state
let ship = new Ship()
let keyPressed = {}

// check for user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})

window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
  // todo we might need this later...
})

// game loop
function loop() {
  // change game state
  if (keyPressed['ArrowLeft']) {
    ship.rotateLeft();
  }
  if (keyPressed['ArrowRight']) {
    ship.rotateRight();
  }
  if (keyPressed['ArrowUp']) {
    ship.thrust();
  }

  ship.step()

  // draw all
  erase()
  ship.draw()

  // trigger loop
  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load
async function loadGame() {
  await shipSprite.loaded
  await meteorSprite.loaded
  loop()
}
loadGame()
