import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Ekranı',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kullanıcılar',
    to: '/users',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kartlar',
    to: '/door',
    icon: 'cil-pool',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Ayarlar']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Roller',
    to: '/door',
    icon: 'cil-pool',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Kapılar',
    to: '/door',
    icon: 'cil-pool',
  },
  
 
]

export default _nav
