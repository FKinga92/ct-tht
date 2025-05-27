import imgUrl from '../../assets/partner.svg';
import {HeaderSC} from './Header.styled';
import {MainContentSC} from './MainContent.styled';

const Header = () => {
  return (
    <HeaderSC>
      <MainContentSC>
        <img src={imgUrl} alt='Partner Test Logo' />
      </MainContentSC>
    </HeaderSC>
  );
};

export default Header;
