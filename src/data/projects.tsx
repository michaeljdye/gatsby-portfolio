import bugRunImg from '../images/bug-run.jpg'
import expNationsImg from '../images/explore-the-nations.jpg'
import memMatchImg from '../images/memory-match.jpg'
import myReadsImg from '../images/my-reads.jpg'
import roboImg from '../images/robofriends.jpg'
import smartImg from '../images/smart-brain.jpg'

interface project {
  name: string
  description: string
  source: string
  demo: string
  img: string
  id: number
}

const projects: Array<project> = [
  {
    name: 'Memory Match Game',
    description:
      'The memory match game is a play off the classic game known as Concentration.',
    source: 'https://github.com/JoeyDye/memory-match-game',
    demo: 'https://confident-hodgkin-027b22.netlify.com/',
    img: memMatchImg,
    id: 3,
  },
  {
    name: 'Explore the Nations',
    description:
      'Explore The Nations features some of the top restaurants in The Nations.',
    source: 'https://github.com/JoeyDye/explore-the-nations',
    demo: 'https://explorethenations-86j0hrveh.now.sh/',
    img: expNationsImg,
    id: 1,
  },
  {
    name: 'My Reads',
    description:
      'The MyReads app provides a simple way to find new books and track your latest reads.',
    source: 'https://github.com/JoeyDye/my-reads',
    demo: 'https://myreads-5icjs7wez.now.sh/',
    img: myReadsImg,
    id: 2,
  },
  {
    name: 'Bug Run',
    description:
      'Explore The Nations features some of the top restaurants in The Nations.',
    source: 'https://github.com/JoeyDye/bug-run',
    demo: 'https://joeydye.github.io/bug-run/',
    img: bugRunImg,
    id: 4,
  },
  {
    name: 'Face Recognition App',
    description:
      'The MyReads app provides a simple way to find new books and track your latest reads.',
    source: 'https://github.com/JoeyDye/my-reads',
    demo: 'https://the-smart-brain-app.herokuapp.com/',
    img: smartImg,
    id: 5,
  },
  {
    name: 'Robofriends',
    description:
      'The memory match game is a play off the classic game known as Concentration.',
    source: 'https://github.com/JoeyDye/robofriends-v2/',
    demo: 'https://joeydye.github.io/robofriends-v2/',
    img: roboImg,
    id: 6,
  },
]

export default projects
