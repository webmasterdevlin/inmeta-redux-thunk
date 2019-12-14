import React from 'react'
import {Router, Redirect} from '@reach/router'
import Heroes from './heroes/pages/Heroes'

const RootRouter = () => (
    <Router>
        <Redirect from="/" to="heroes" noThrow />
        <Heroes path="heroes" />
    </Router>
)

export default RootRouter;
