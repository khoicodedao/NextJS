import React from "react";
interface Author {
  id: number;
  title: string;
  author: string;
  content: string;
}
const TableComponent = ({ blogs }: { blogs: Author[] }) => {
  // Sample data as an array of objects

  return (
    <div className="ml-4 mr-4">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((item: Author) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
