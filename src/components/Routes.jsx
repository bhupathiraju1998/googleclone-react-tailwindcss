import React from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'

export const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path='/'>
          <Redirect to = '/search'/>
        </Route>
        <Route exact path={['/search','/images','/news','/videos']}>
          <Redirect to = '/search'/>
        </Route>
      </Switch>
    </div>
  )
}
