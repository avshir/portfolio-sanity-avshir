import "./index.scss";

interface AnimatedLettersSCSSProps {
  letterClass: string;
  strArray: string[];
  startDelay: number;
}

const AnimatedLettersSCSS = ({
  letterClass,
  strArray,
  startDelay,
}: AnimatedLettersSCSSProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + startDelay}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLettersSCSS;

// use
// const [letterClass, setLetterClass] = useState("text-animate");
// const jobArray = "Web Developer".split("");

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setLetterClass("text-animate-hover");
//   }, 4000);

//   return () => clearTimeout(timer);
// }, []);
