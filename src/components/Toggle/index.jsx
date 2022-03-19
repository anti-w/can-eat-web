import P from 'prop-types'
import React from 'react'

import {Moon, Sun} from '@styled-icons/bootstrap'

export const Toggle = ({theme, toggleTheme}) => {
    console.log(theme)
    return (
        <div onClick={toggleTheme}>
            {theme === 'light' ? <Sun size="38"/> : <Moon size="38"/>}
        </div>
    )
}

Toggle.propTypes = {
    theme: P.string,
    toggleTheme: P.func
}