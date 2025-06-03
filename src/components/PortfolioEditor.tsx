import { useState } from "react";

const PortfolioEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState(false);
  const [position, setPosition] = useState("");
  return <div>PortfolioEditor</div>;
};

export default PortfolioEditor;
