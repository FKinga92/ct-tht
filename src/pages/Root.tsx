import {Outlet} from 'react-router';
import {CarsContext} from '../context/CarsContext';
import {transformVehAvailResponse} from '../utils';
import feedData from '../data/cars.json';
import Header from '../components/ui/Header';
import {MainSC} from './Root.styled';
import {MainContentSC} from '../components/ui/MainContent.styled';

const Root = () => {
  return (
    <CarsContext value={transformVehAvailResponse(feedData[0].VehAvailRSCore)}>
      <Header />
      <MainSC>
        <MainContentSC>
          <Outlet />
        </MainContentSC>
      </MainSC>
    </CarsContext>
  );
};

export default Root;
