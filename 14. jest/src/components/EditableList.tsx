import { useState } from "react";

interface EditableListProps {
  items: string[];
}

const EditableList: React.FC<EditableListProps> = ({ items }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(items);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setNewItem(list[index]);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedList = [...list];
      updatedList[editingIndex] = newItem;
      setList(updatedList);
      setEditingIndex(null);
      setNewItem("");
    }
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              {item}
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EditableList;
