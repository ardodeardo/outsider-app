import React from 'react'

import staticData from "@/static/publisher.json";
import GridSources from '../Grid/grid.sources';

function LimitApi() {
  return (
    <div className="mt-8">
      <div className="px-5">
        <h1 className="text-3xl dark:text-white-secondary leading-10 font-bold">
          Looks like
          we hit a roadblock..</h1>
        <p className="text-base dark:text-white-secondary mt-2">
          We apologize for any inconvenience caused by our limited API calls. In the meantime, we recommend to read some news from our publishers.
        </p>
        <div className="mt-8">
          <GridSources data={staticData}></GridSources>
        </div>
      </div>
    </div>
  )
}

export default LimitApi