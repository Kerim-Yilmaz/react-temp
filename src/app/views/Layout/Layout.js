import React from "react";
import TheSidebar from '../../components/TheSideBar'
import TheHeaderBar from '../../components/TheHeaderBar'
import TheContent from "../../components/TheContent";
export default function Layout(){

  return(
    <>
      <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeaderBar/>
        <div className="c-body">
          <TheContent/>
        </div>
        
      </div>
    </div>
    </>
  )
}



/*
<RoutesSuspense>{renderRoutes(routes)}</RoutesSuspense>
*/