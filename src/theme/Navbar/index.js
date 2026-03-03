import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import SearchBar from './SearchBar';

export default function Navbar(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <OriginalNavbar {...props} />
      <div style={{ marginLeft: 'auto', paddingRight: '1rem' }}>
        <SearchBar />
      </div>
    </div>
  );
}