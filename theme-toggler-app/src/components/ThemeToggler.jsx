import React, { useContext } from 'react';
import { ThemeCont } from './ThemeContext';

const ThemeToggler = () => {
const { state , setReducer } = useContext(ThemeCont); // useContext to get the state and setReducer from ThemeContext

    return (

        <div className = {state === 'light' ? 'bg-white text-black h-screen w-screen' : 'bg-black text-white h-screen w-screen'}>
            <button aria-label="Toggle Theme" className = {state === 'light' ? 'bg-black text-white' : 'bg-white text-black'} onClick = {() => setReducer({type : 'TOGGLE_THEME'})}>Switch</button>
            <div className='flex justify-center items-center '>Hello this is theme toggler app you can change the theme here from light and dark from the top left switch button</div>
        </div>
    )
}
export default ThemeToggler