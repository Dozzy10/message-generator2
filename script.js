// --- Motivational Message Generator ---

// Different sets of random data
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

// Generate a random message
function generateMessage() {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const mood = moods[Math.floor(Math.random() * moods.length)];
  const tip = advice[Math.floor(Math.random() * advice.length)];

  return `${greeting} You're feeling ${mood}. Remember to ${tip}`;
}

// Output the message
console.log(generateMessage());
