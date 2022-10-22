import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constant';
import SearchBar from './SearchBar';

const Navbar = () =>  (
      <Stack 
      direction="row"
      alignItems="center"
      sx={{ position: 'sticky', background: '#000', top: 16, ml: '6px', justifyContent: 'space-between'}}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
      </Stack>
      );

export default Navbar
