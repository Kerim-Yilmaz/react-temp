import { useSelector, useDispatch } from 'react-redux'
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarMinimizer,
    CSidebarNavDropdown,
    CSidebarNavItem,
  } from '@coreui/react'
 
  import navigation from './_nav'
  



export default function SideBar() {

  const dispatch = useDispatch()
  const show = useSelector(state => state.changeState.sidebarShow)


    return (
    <>
     <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src='https://merkez.biziminternet.com.tr/img/site_logo.png' alt='logo'/>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
    </>
    )
}
