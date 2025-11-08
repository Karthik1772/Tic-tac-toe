import { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [initialName, setInitialName] = useState(props.name);

  function handleEditClick() {
    setIsEditing((editing)=>!editing);
  }

  function handleNameChange(event) {
    setInitialName(event.target.value);
  }

  let playerName = <span className="player-name">{initialName}</span>;
  // let btnCaption ="save";

  if (isEditing) {
    playerName = <input type="text" required value={initialName} onChange={handleNameChange}/>;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
