import React from "react";
import { useDefaultLocalStorage } from "../../hooks/useLocalStorage";

export const ListItem: React.FC<{item: string, onDelete: Function}> = (props) => {
  const { onDelete, item } = props;
  return (
    <li>
      <span>{item}</span>
      <button onClick={() => onDelete(item)}>X</button>
    </li>
  );
}

export const ListInput: React.FC<{onAdd: Function}> = (props) => {
  const [value, setValue] = React.useState('')

  const handleAdd = () => {
    if (value === '') {
      return;
    }
    props.onAdd(value);
    setValue('');
  }

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} type="text" />
      <button disabled={value === ''} type="submit" onClick={handleAdd}>Add</button>
    </div>
  );
}

export const List: React.FC<{}> = (props) => {
  const [listItems, setListItems] = useDefaultLocalStorage<Array<string>>({
    key: 'listItems',
    initialValue: ['hello', 'hi']
  });

  const onAdd = (value: string) => {
    setListItems(items => [...items, value]);
  }

  const onDelete = (value: string, index: number) => {
    console.warn("delete", value, index);
    setListItems(items => items.filter((item, i) => !(item === value && i === index)))
  } 
  
  return (
    <div>
      <h1>List</h1>
      <ListInput onAdd={onAdd} />
      <ul>
        {listItems.map((item, i) => {
          return (
            <ListItem key={item} item={item} onDelete={(value: string) => onDelete(value, i)} />
          )
        })}
      </ul>
    </div>
  );
}