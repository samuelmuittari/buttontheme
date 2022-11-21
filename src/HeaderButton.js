import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';



function HeaderButton() {
  const color = useContext(ThemeContext)
  
  return (
    <div>
      <button style={color.blue}>Press me</button>
    </div>
  );
}

export default HeaderButton;
