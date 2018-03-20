import React from 'react'
import * as styles from '../styles/banner.scss'

export default class Banner extends React.PureComponent<null, any> {
    render() {
        return (
            <h3 className={styles.banner}>Title</h3>
        )
    }
}
