import React from 'react'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

export default function LinkButton ({ to, label }): React.ReactElement {
  return (
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={to}>
            {label}
          </Link>
        </div>
      </div>
  )
}
