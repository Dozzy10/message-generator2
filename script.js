// --- Motivational Message Generator ---

const greetings = [
  "Hey champion!",
  "Hello superstar!",
  "Hi warrior!",
  "What's up legend?",
  "Greetings achiever!"
];

const moods = [
  "full of potential",
  "strong and capable",
  "ready to win",
  "focused and unstoppable",
  "overflowing with greatness"
];

const advice = [
  "keep moving, even if the steps are small.",
  "trust the process, results will follow.",
  "believe in yourself even when it's hard.",
  "show up today stronger than yesterday.",
  "take the risk — you owe it to your future self."
];

// ASCII art 
const asciiArt = [
  `
  ⭐⭐⭐⭐⭐
     YOU GOT THIS!
  ⭐⭐⭐⭐⭐
  `,
  `
   (•‿•)
  /|   |\\
   |   |
  / \\ / \\
  Keep Smiling!
  `,
  `
  ╔═══╗────────╔╗
  ║╔═╗║────────║║
  ║║─╚╬══╦═╗╔══╣║╔══╗
  ║║╔═╣╔╗║╔╗╣╔╗║║║║═╣
  ║╚╩═║╔╗║║║║╔╗║╚╣║═╣
  ╚═══╩╝╚╩╝╚╩╝╚╩═╩══╝
  Believe!
  `,
  `
    ✨
   ( ͡❛ ͜ʖ ͡❛)
   <)  )╯ STAY STRONG
    /  \\
  `
];

// Generate a random message
function generateMessage() {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const mood = moods[Math.floor(Math.random() * moods.length)];
  const tip = advice[Math.floor(Math.random() * advice.length)];
  const art = asciiArt[Math.floor(Math.random() * asciiArt.length)];

  return `${greeting} You're feeling ${mood}. Remember to ${tip}\n${art}`;
}

// Output the message
console.log(generateMessage());
