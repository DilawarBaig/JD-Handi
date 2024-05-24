import React from 'react'
import useTheme from '../../contexts/theme'


export default function ThemeBtn() {
    
     const {themeMode, darkTheme, lightTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />
            <div className="w-11 h-6 bg-gray-900 peer-focus:outline-none   rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full   after:absolute after:top-[2px] after:left-[2px] after:bg-orange-700 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white/30"></div>
        </label>
    );
}