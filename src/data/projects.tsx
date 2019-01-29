interface project {
  name: string
  description: string
  source: string
  demo?: string
  id: number
}

const projects: Array<project> = [
  {
    name: 'Explore the Nations',
    description:
      'Explore The Nations features some of the top restaurants in The Nations.',
    source: 'https://github.com/JoeyDye/explore-the-nations',
    demo: 'https://explorethenations-86j0hrveh.now.sh/',
    id: 1,
  },
  {
    name: 'My Reads',
    description:
      'The MyReads app provides a simple way to find new books and track your latest reads.',
    source: 'https://github.com/JoeyDye/my-reads',
    demo: 'https://myreads-5icjs7wez.now.sh/',
    id: 2,
  },
  {
    name: 'Memory Match Game',
    description:
      'The memory match game is a play off the classic game known as Concentration.',
    source: 'https://github.com/JoeyDye/memory-match-game',
    demo: 'https://confident-hodgkin-027b22.netlify.com/',
    id: 3,
  },
  {
    name: 'Bug Run',
    description:
      'Explore The Nations features some of the top restaurants in The Nations.',
    source: 'https://github.com/JoeyDye/bug-run',
    demo: 'https://joeydye.github.io/bug-run/',
    id: 4,
  },
  {
    name: 'Face Recognition App',
    description:
      'The MyReads app provides a simple way to find new books and track your latest reads.',
    source: 'https://github.com/JoeyDye/my-reads',
    id: 5,
  },
  {
    name: 'Robofriends',
    description:
      'The memory match game is a play off the classic game known as Concentration.',
    source: 'https://github.com/JoeyDye/robofriends-v2/',
    demo: 'https://joeydye.github.io/robofriends-v2/',
    id: 6,
  },
]

export default projects
