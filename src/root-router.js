import React from 'react'
import {Router, Redirect} from '@reach/router'
import Heroes from './heroes/pages/Heroes'
import EditHero from './heroes/pages/EditHero'

const RootRouter = () => (
    <Router>
        <Redirect from="/" to="heroes" noThrow />
        <Heroes path="heroes" />
        <EditHero path="hero-detail/:id" />
    </Router>
)

export default RootRouter;
