import React from "react";
import { IListItemProps } from "./types";

const ListItem: React.FC<IListItemProps> = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.phone}</td>
    </tr>
  );
};

export default ListItem;
