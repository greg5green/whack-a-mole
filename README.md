# Whack a Mole Game

## Prerequisites

- Node 24.14.1 (preferably managed via NVM or mise)
- pnpm

## Build

To build or run the development server, start with these steps:

1. Clone the repository and `cd` into the cloned directory
1. `nvm use` (_Alternative:_ Make sure you have Node 24.14.1 installed and your PATH points to that version)
1. `pnpm install` to install build dependencies

To build a minified version of the game:

- `pnpm build:production`
  - A copy of the game will be built into the `/dist` folder

To build a non-minified version of the game:

- `pnpm build`
  - A copy of the game will be built into the `/dist` folder

To run a dev server that automatically builds the game and hosts a version locally:

- `pnpm start`
  - A webserver is started up that can be reached at `http://localhost:3000`

### Development Tasks

- `pnpm lint` - Will lint CSS and JS files to find any potential issues

### Other Notes

- Prettier is installed and will be run on staged code as a pre-commit hook via `husky` and `pretty-quick`

## Future improvements

- Separate controlling the visibility of moles out from `GameController` and `Mole` into a `MoleController`
  - Currently, `GameController` controls when new moles are shown, but the `Mole`s themselves control how long they are visible
  - Moving code for when moles are shown and how long they are visible into a `MoleController` would make how this process works a little easier to follow and give `GameController` a single responsibility (controlling the clock and score)
- Add different levels of difficulty
  - The current speed of the game is probably difficult for those with poor motor skills
- Adding keyboard controls and visible focus states for hitting the moles
  - Although the game controls to start, stop, and reset the game can be used with a keyboard, it is not currently possible to actually play the game with a keyboard
  - This would be good with adding an easier level of difficulty as it would be very hard to navigate between mole hills and hit the mole with the keyboard at the current game speed

## Project Requirements

### Technologies

HTML, CSS, and JavaScript. Please do not use any frameworks or libraries. Our primary focus is to see how you structured your code and solve basic functional paradigms, so use this as an opportunity to showcase your understanding of the core UI technologies.

### Game Objective

Click a “mole” as it appears. The amount of time each mole stays visible should be random. The game should have a time limit. There should be controls available to start, stop, and reset the game.

### Requirements

- The game should function consistently in IE11+ and one other major browser
- The game should function consistently in at least 2 unique viewport sizes.

Secondary Considerations (not required):

- Code formatting, readability, and documentation
- Performance Optimizations
- Accessibility

### Distribution

Provide a GIT repository with your source code. If any build systems were
used, please include instructions to run them in a Readme.
