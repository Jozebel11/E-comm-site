import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { upDateBasketQuantity } from './reducer';
import Logo from './logo-no-background.png'
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo' alt='logo' src={Logo}/>
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
                
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <div className='header_option' onClick={handleOpen} >
                <span className='header_optionLineTwo'>
                <PersonIcon />
                </span>
                {open ? (
                  <ul className="menu">
                    <Link to='/login'>
                    <li className="menu_item">
                      Sign In
                    </li>
                    </Link>
                    <li className="menu_item">
                       Orders & Returns
                    </li>
                  </ul>
                ) : null}
            </div>
            
            <Link to='/checkout'>
            <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header_basketCount'>{upDateBasketQuantity(basket)}</span>
            </div>
            </Link>
        </div>

    </div>
  )
}

export default Header