import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const data = books.map(book => ({
    name: book.name,
    uv: book.totalPages,
  }));

  return (
    <div className="w-11/12 mx-auto flex items-center justify-center mt-20">
      <BarChart
        width={1200}
        height={500}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 195 }} // Increased bottom margin
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PageToRead;
