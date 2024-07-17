import { PropsWithChildren } from "react";

const Heading = ({ children }: PropsWithChildren) => {
  return <h2>{children}</h2>;
};

export default Heading;
