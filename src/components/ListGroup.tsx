function ListGroup() {
  // 'New York',
  // 'San Francisco',
  // 'Tokyo',
  // 'London',
  // 'Paris'

  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  // const handleClick = (event) => console.log(event)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={index}
            onClick={() => console.log(item)}
          >
            {item}{' '}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
