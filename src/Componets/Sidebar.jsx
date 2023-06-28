
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SidebarRow from './SidebarRow';
import './Sidebar.css'
import person from '../img/pic1.jpg'
import { useStateValue } from '../StateProvider';
function Sidebar() {
  const [{user},dispatch] = useStateValue()

  return (
    <div className='sidebar_Container'>
      <SidebarRow src={user.photoURL} 
      text={user.displayName}/>

      <SidebarRow Icon={LocalHospitalIcon } text={'COVID-19 information center'}/>
      <SidebarRow Icon={EmojiFlagsIcon } text={'Pages'}/>
      <SidebarRow Icon={PeopleIcon } text={'Friends'}/>
      <SidebarRow Icon={MessageIcon} text={'Messenger'}/>
      <SidebarRow Icon={StorefrontIcon} text={'Marketplace'}/>
      <SidebarRow Icon={VideoLibraryIcon} text={'Videos'}/>
      <SidebarRow Icon={KeyboardArrowDownIcon} text={'Marketplace'}/>
     
    
    </div>
  )
}

export default Sidebar
