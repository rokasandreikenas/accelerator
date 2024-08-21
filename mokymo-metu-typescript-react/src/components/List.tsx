interface ListProps {
  list: number[];
}

const List = ({ list }: ListProps) => {
  return (
    <div>
      My list
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};

export default List;
