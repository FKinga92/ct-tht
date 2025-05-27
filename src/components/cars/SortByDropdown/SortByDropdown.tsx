import React from 'react';
import {SORT_KEYS, type TSortKey} from '../../../types/vendor-avails';
import {SortLabels} from '../../../types/constants';
import {SortByDropdownSC} from './SortByDropdown.styled';

type TDropdownProps = {
  value: TSortKey;
  onChange: (value: TSortKey) => void;
};

const SortByDropdown: React.FC<TDropdownProps> = ({value, onChange}) => {
  return (
    <SortByDropdownSC>
      <label>Sort available vehicles by:</label>
      <select value={value} onChange={e => onChange(e.target.value as TSortKey)}>
        {SORT_KEYS.map(option => (
          <option key={option} value={option}>
            {SortLabels[option]}
          </option>
        ))}
      </select>
    </SortByDropdownSC>
  );
};

export default SortByDropdown;
