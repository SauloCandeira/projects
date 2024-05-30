import React, { useState } from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../Sidebaritem/Sidebaritem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  const [sidebar, setSidebar] = useState(true)

  return (
    <Container sidebar={setSidebar}>
      {/* <FaTimes onClick={closeSidebar} />   */}
      <Content>
        <SidebarItem Icon={FaHome} Text="Roadmap" />
        <SidebarItem Icon={FaChartBar} Text="Testes" />
        {/* <SidebarItem Icon={FaUserAlt} Text="Clientes" />
        <SidebarItem Icon={FaEnvelope} Text="Relatório" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Sair" /> */}
        {/* <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" /> */}
      </Content>
    </Container>
  )
}

export default Sidebar