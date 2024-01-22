import { ReactNode } from "react";
import "@styles/general/containerSection.css";
interface props {
  children: ReactNode;
}
const ContainerSection = ({ children }: props) => {
  return <div className="containerSection">{children}</div>;
};

export default ContainerSection;
