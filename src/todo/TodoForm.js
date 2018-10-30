import React, { useState } from 'react';

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: ev => setValue(ev.target.value),
    resetValue: () => setValue(initialValue),
  };
};

export default function TodoForm({ onAdd }) {
  const { value, onChange, resetValue } = useInputValue('');

  function handleAdd() {
    if (value === '') return;

    onAdd(value);
    resetValue();
  }

  return (
    <section>
      <input value={value} onChange={onChange} />
      <button onClick={handleAdd}>Add</button>
    </section>
  );
}
