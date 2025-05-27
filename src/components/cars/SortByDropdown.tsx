import React from 'react';
import {SORT_KEYS, SortLabels, type TSortKey} from '../../types/vendor-avails';

type TDropdownProps = {
  value: TSortKey;
  onChange: (value: TSortKey) => void;
};

const SortByDropdown: React.FC<TDropdownProps> = ({value, onChange}) => {
  return (
    <div>
      <label>Sort available vehicles by:</label>
      <select value={value} onChange={e => onChange(e.target.value as TSortKey)}>
        {SORT_KEYS.map(option => (
          <option key={option} value={option}>
            {SortLabels[option]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortByDropdown;
