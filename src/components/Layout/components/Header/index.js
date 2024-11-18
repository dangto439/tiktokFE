import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia,faEllipsisVertical,faGear,faKeyboard,faSignOut, faUser,faCircleQuestion,faCoins } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import MenuItem from '../../../Popper/Menu/MenuItem';
import { MessageIcons } from '../../../Icons';
import {UploadIcon} from '../../../uploads'
import Image from '../../../image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '../../../../config/routers';
const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon = {faEarthAsia}/>,
    title: 'English',
    children: {
      title: 'Language',
      data:[
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
        {
        code: 'EN',
        title: 'English',
        },
        {
          code: 'VN',
          title: 'Tiếng Việt'
        },
      ]
      
    },

  },
  {
    icon: <FontAwesomeIcon icon = {faCircleQuestion}/>,
    title: 'Feedback and Help',
    to: '/feadback'
  
  },
  {
    icon: <FontAwesomeIcon icon = {faKeyboard}/>,
    title: 'Keyboard shortcuts',
    
  
  },
];
const userMenu = [
  {
    icon: <FontAwesomeIcon icon = {faUser}/>,
    title: 'View Profile',
    to: '/@phucbaoooo'
  
  },
  {
    icon: <FontAwesomeIcon icon = {faCoins}/>,
    title: 'Get Coin',
    to: '/Coins'
  
  },
  {
    icon: <FontAwesomeIcon icon = {faGear}/>,
    title: 'Setting',
    to: '/Setting'
  
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon = {faSignOut}/>,
    title: 'Logout',
    to: '/Logout',
    separate: true,
  
  },
]
function Header() {

    const currentUser = true;
  
    const handleMenuChange = (MenuItem) =>{
      switch(MenuItem.type){
        case 'language': 
          break;
        default:                                                                                                                                                                                                                      
      }

    }
    return <header className = {cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
         <Link to ={routesConfig.home} className={cx('logo-link')}> <img src= {images.logo} alt="Tiktok"/></Link>
          
        </div>
       <Search/>
      <div className={cx('actions')}>
      {currentUser ? (
        <>
          <Tippy content="Upload" placement='bottom'>
             <div className={cx('DivUpload')}>
              <button className={cx('upload-btn')}>
                  <UploadIcon/>
              </button>
              <span className={cx('spUpload')}>Upload</span>
             </div>
           </Tippy>
           <Tippy delay={[0,200]} content="Tin nhắn" placement='bottom'>
              <button className={cx('action-btn')}>
                <MessageIcons/>
              </button>          
           </Tippy>
         
        </>
      ) : (
       <>
       <Button text>Upload</Button>
       <Button primary>Log in</Button>  
       
       </>
        
        
      )

      }
      <Menu items = { currentUser ? userMenu:MENU_ITEMS} onChange={handleMenuChange}>  
        {currentUser ? (
          <Image
            src="https://yt3.ggpht.com/yti/ANjgQV-QGS-VDIv3Ul_WQl4wa7BYzn2uHq2WID92-YBha5WT-bA=s88-c-k-c0x00ffffff-no-rj" 
            alt='Nguyen Van A '
            className={cx('user-avatar')}  
            fallback = "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-1/84531252_883165255471380_6439964724871299072_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGO64-EtLEe2ee1QG0v8eXatjziO_Pa-b62POI789r5vmkfMqJyoIngQpKhTYbAfe1U5aq1VNOglIdTWFOoWJXU&_nc_ohc=MLpfgBMXoawQ7kNvgFrdTeS&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=A2A0oxCnC2MlCXu3gQl0iiO&oh=00_AYD-0PsQGQpFsXj_R3n1aqjRpNc-wIoUX-RfQAgQ4ki50g&oe=674C0014">
          </Image>

        ):(
          <button className={cx('more-btn')}>
                   <FontAwesomeIcon icon = {faEllipsisVertical}/>
         </button>
        )}   
         
       </Menu>    
      </div>
       
        
      </div>
    </header>;
}

export default Header;