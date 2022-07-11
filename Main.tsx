/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
// import barba from '@barba/core';

import './Main.scss';

export const Main: React.FC = () => {
  const [page, setPage] = useState('home');

  return (
    <>
      {page === 'home' && (
        <div className="main">
          <div className="main__content">
            <div className="main__content-circleOne">
              <div className="text-circle">
                FULL-CYCLE EVENT AGENCY
              </div>

              <div className="main__content-circleTwo" />
            </div>

            {/* <div className="main__content-diagonal">
              FULL-CYCLE EVENT AGENCY
            </div> */}
          </div>

          <div className="main__words">
            <a
              href="#"
              className="main__words-where"
              onClick={() => setPage('new')}
            >
              where?
            </a>
            <a
              href="#"
              className="main__words-who"
              onClick={() => setPage('new')}
            >
              who?
            </a>
            <a
              href="#"
              className="main__words-what"
              onClick={() => setPage('new')}
            >
              what?
            </a>
          </div>
        </div>
      )}

      {page === 'new' && (
        <>
          <h2 className="main__words-title">
            Test page
          </h2>
          <a
            href=""
            className="main__words-what"
            onClick={() => setPage('home')}
          >
            back
          </a>
          <a
            href=""
            className="main__words-where"
            onClick={() => setPage('home')}
          >
            back
          </a>
          <a
            href=""
            className="main__words-who"
            onClick={() => setPage('home')}
          >
            back
          </a>
        </>
      )}
    </>
  );
};
