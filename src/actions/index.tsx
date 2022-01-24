export const SCISSORS = 0;
export const PAPER = 1;
export const ROCK = 2;

export const moves: { [key: number]: { win: number[], label: string } } = {
  [SCISSORS]: { win: [PAPER], label: "SCISSORS" },
  [PAPER]: { win: [ROCK], label: "PAPER" },
  [ROCK]: { win: [SCISSORS], label: "ROCK" }
}

export const play = (move: string) => {
  switch (move) {
    case "SCISSORS":
      return SCISSORS;
    case "PAPER":
      return PAPER;
    case "ROCK":
      return ROCK;

    default:
      throw "BAD_MOVE"
  }
};

export const cpuMove = () => {
  return Math.floor(Math.random() * 3);
}

export const getResult = (user: number, cpu: number) => {
  if (user === cpu) {
    return "DRAW";
  }

  if (moves[user].win[0] === cpu) {
    return "WIN";
  }
  return "LOOSE";
}

