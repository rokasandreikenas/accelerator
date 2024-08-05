function NumberList(props) {
  const { numbers } = props;
  const prefix = "#";

  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>
          {prefix}
          {number}
        </li>
      ))}
    </ul>
  );
}

export default NumberList;
