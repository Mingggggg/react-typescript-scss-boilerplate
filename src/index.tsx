import React from 'react'
import ReactDOM from 'react-dom'
import * as styles from './styles/base.scss'

import Banner from './components/banner'

ReactDOM.render(
    <div className={styles.background}>
        <Banner/>
    </div>,
    document.getElementById('root')
)