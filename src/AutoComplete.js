import React, { useState } from 'react';

const AutoComplete = (props) => {
  const [searchString, setSearchString] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuugestion = (choosedVariant) => {
    setSearchString(choosedVariant);
    setSuggestions([]);
  };

  const onChange = (searchString) => {
    let filteredSuggestions = [];
    if (searchString.length > 0) {
      filteredSuggestions = props.array.filter((user) => {
        const regex = new RegExp(`${searchString}`, 'gi');
        return user.name.match(regex);
      });
    }
    setSuggestions(filteredSuggestions);
    setSearchString(searchString);
  };

  return (
    <div>
      <input
        type="text"
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
        onChange={(e) => onChange(e.target.value)}
        value={searchString}
      />
      {suggestions &&
        suggestions.map((sugg, i) => (
          <div onClick={() => onSuugestion(sugg.name)} key={i} style={{ cursor: 'pointer' }}>
            {sugg.name}
          </div>
        ))}
    </div>
  );
};

export default AutoComplete;
