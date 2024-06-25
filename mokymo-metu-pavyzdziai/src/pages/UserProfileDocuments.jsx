import { useParams } from "react-router-dom";

const UserProfileDocuments = () => {
  const { userId, documentId } = useParams();

  // us
  return (
    <div>
      UserProfileDocuments
      {userId}, {documentId}
    </div>
  );
};

export default UserProfileDocuments;
