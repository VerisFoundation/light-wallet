// @flow
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../core/constants'

import styles from './Home.scss'

const Home = () => (
  <div className={styles.home}>
    <nav>
      <Link to={ROUTES.LOGIN_LOCAL_STORAGE}>Login using a saved wallet</Link>
      <Link to={ROUTES.LOGIN_NEP2}>Login using an encrypted key</Link>
      <Link to={ROUTES.LOGIN_PRIVATE_KEY}>Login using a private key</Link>
      {/* <Link to={ROUTES.LOGIN_LEDGER_NANO_S}>Login using a Ledger</Link> */}
      <Link to={ROUTES.CREATE_WALLET} className={styles.alt}>
        Create a new wallet
      </Link>
      <Link to={ROUTES.ENCRYPT_KEY} className={styles.alt}>
        Encrypt an existing key
      </Link>
      <Link to={ROUTES.SETTINGS} className={styles.alt}>
        Manage Settings
      </Link>
    </nav>
  </div>
)

export default Home
