const name = prompt('What is your name?')

const profession = prompt(`Hello ${name}. Are you a Warrior, Hunter, or Builder?`)

switch (profession) {
  case 'Warrior':
    warrior(prompt('A nearby clan has declared war. Do you Fight, Run, or Negotiate?'))
    break
  case 'Hunter':
    hunter(prompt('Would you like to hunt Boar or Rabbit?'))
    break
  case 'Builder':
    builder(prompt('What are we building today: Church, Stable, or Barracks?'))
    break
  default:
    alert('You have failed to select a valid option.')
}

function warrior(choice) {
  switch (choice) {
    case 'Fight':
      alert('You suffered a bitter defeat. Sorry `bout it.')
      break
    case 'Run':
      alert('You outran your enemy and have saved your clan.')
      break
    case 'Negotiate':
      alert('Negotiations went south. You were forced to surrender your land.')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}

function hunter(choice) {
  switch (choice) {
    case 'Boar':
      alert('You were overwhelmed and suffered fatal wounds.')
      break
    case 'Rabbit':
      alert('You provided your clan with a bountiful harvest of rabbits.')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}

function builder(choice) {
  switch (choice) {
    case 'Church':
      alert('You have provided a place of worship for your people. Well done.')
      break
    case 'Stable':
      alert('You have provided shelter for livestock, and brought prosperity to your people.')
      break
    case 'Barracks':
      alert('There was a fire, and your Barracks has burned to the ground.')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}
