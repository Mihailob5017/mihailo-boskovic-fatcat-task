import React from "react";
import ListItem from "./list-item";
import { IListItemProps, IUser } from "./types";
import { useQuery } from "react-query";
import { fetchUsers } from "./api";

const List: React.FC = () => {
  const { data, isLoading, error } = useQuery<IUser[]>("users", fetchUsers);

  const reduceUser = (user: IUser): IListItemProps => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      phone: user.phone,
    };
  };
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <h3>ID</h3>
          </th>
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Email</h3>
          </th>
          <th>
            <h3>Phone</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: IUser) => (
          <ListItem key={item.id} {...reduceUser(item)} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
