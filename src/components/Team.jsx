import React, { useEffect, useState } from 'react';
import { getTeam } from '../common/getter';
import { formatNumber } from '../common/util';

import './Team.scss';

export default _ => {
  const [team, setTeam] = useState();

  useEffect(_ => {
    getTeam(261473).then(setTeam);
  }, []);

  return team ? (
    <div className="Team Card">
      <h1 className="Card__Heading">Team</h1>
      <section className="Card__Content">
        <ul>
          <li>Score: <strong>{formatNumber(team.score)}</strong></li>
          <li>Rank: <strong>{formatNumber(team.rank)}</strong></li>
          <li>Work Unit completed: <strong>{formatNumber(team.wus)}</strong></li>
        </ul>
        <img
          className="Logo"
          src={team.logo}
          alt="Team logo"
        />
      </section>
    </div>
  ) : '';
};
