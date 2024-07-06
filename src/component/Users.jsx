import React, { useId } from "react";
import Button from "./Button";

const Users = () => {
  const [userId, setuserId] = React.useState(0);
  const [users, setUsers] = React.useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const username = evt.target.username.value;
    const email = evt.target.email.value;
    const id = userId;

    const newUser = {
      username,
      email,
      id,
    };

    setUsers([...users, newUser]);
    setuserId(id + 1);
    evt.target.reset();
  };

  const handleDelete = (id) => {
    const newArray = users.filter((user) => user.id !== id);
    setUsers(newArray);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl mb-3 text-center">Users</h1>

        <div className="flex gap-10">
          <div className="w-1/3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username">Full name</label>
                <input
                  className="w-full h-10 px-2 border border-black rounded-md"
                  type="text"
                  name="username"
                  id="username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">O'qish turi</label>
                <input
                  className="w-full h-10 px-2 border border-black rounded-md"
                  type="text"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <button className="bg-black px-3 py-1 rounded-md text-white float-right">
                Add
              </button>
            </form>
          </div>

          <div className="w-2/3">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    F.I.O
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    O'qish turi
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Id
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3">{user.username}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <Button
                        text="delete"
                        class="bg-red-500 text-white px-3 py-2 rounded-mdid"
                        id={user.id}
                        click={() => handleDelete(user.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
