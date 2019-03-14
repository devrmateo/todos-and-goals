import React from 'react';

export default function List (props) {
  const items = props.items;
    return (
      <ul>
        {items.map((item) =>
          <li key={item.id}>
            <span
              onClick={() => props.toggleItem && props.toggleItem(item.id)}
              style = {{textDecoration: item.complete ? 'line-through' : 'none'}}
            >
              {item.name}
            </span>
            <button onClick={() =>      props.removeItem(item)}>
              X
            </button>
          </li>
        )}
      </ul>
    )
}
