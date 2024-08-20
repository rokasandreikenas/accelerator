interface GreetingProps {
  name: string;
}

// const Greeting: React.FC<GreetingProps> = ({ name }) => {
//   return <h1>Hello, {name}!</h1>;
// };

const Greeting = ({ name }: GreetingProps) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
