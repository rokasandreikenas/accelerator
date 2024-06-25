import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const UserProfileDocuments = () => {
  const { userId, documentId } = useParams();
  const { theme } = useContext(ThemeContext);

  // us
  return (
    <div>
      UserProfileDocuments
      {userId}, {documentId}
      aktyvi tema: {theme}
    </div>
  );
};

export default UserProfileDocuments;
