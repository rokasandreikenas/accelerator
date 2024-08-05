import PropTypes from "prop-types";

function Greeting(props) {
  // props = {name: "Rokas", age: 25}
  return (
    <div>
      My name is {props.name} and I am {props.age} old{" "}
      {props.isActive && <strong>Online</strong>}
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
};

export default Greeting;
