import React from "react";
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/repository" component={Repository}/>
  </Switch>
)

export default Routes;

// exact para comparar se são exatos e não se está
// dentro de (exemplo, / e /repository)
// fragment / switch - Reat dom sem o switch nao faz
// diferenciacao de rotas, simplesmente renderiza.
// Entao o switch trava em uma exibicao por vez
