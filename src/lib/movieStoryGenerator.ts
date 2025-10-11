// src/lib/movieStoryGenerator.ts
const genres = [
  "Sci-Fi",
  "Fantasy",
  "Thriller",
  "Comedy",
  "Drama",
  "Horror",
  "Action",
];
const protagonists = [
  "A skeptical scientist",
  "A disgraced knight",
  "A burnt-out detective",
  "An overly optimistic barista",
  "A teenage hacker",
];
const goals = [
  "to uncover a vast conspiracy",
  "to find a lost artifact",
  "to clear their name",
  "to save their struggling business",
  "to prevent a global catastrophe",
];
const obstacles = [
  "an ancient curse",
  "a rival corporation",
  "their own inner demons",
  "a series of comical misunderstandings",
  "a relentless assassin",
];

export function generateMovieStory() {
  const getRandomElement = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const selectedGenre = getRandomElement(genres);
  const selectedProtagonist = getRandomElement(protagonists);
  const selectedGoal = getRandomElement(goals);
  const selectedObstacle = getRandomElement(obstacles);

  const logline = `In a ${selectedGenre} world, ${selectedProtagonist} must ${selectedGoal} while facing ${selectedObstacle}.`;

  return {
    genre: selectedGenre,
    protagonist: selectedProtagonist,
    goal: selectedGoal,
    obstacle: selectedObstacle,
    logline: logline,
  };
}
