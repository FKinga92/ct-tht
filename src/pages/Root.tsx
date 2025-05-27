import {Outlet} from 'react-router'
import {CarsContext} from '../context/CarsContext'
import {transformVehAvailResponse} from '../utils'
import feedData from '../data/cars.json'
import Header from '../components/ui/Header'

const Root = () => {
  return (
    <CarsContext value={transformVehAvailResponse(feedData[0].VehAvailRSCore)}>
      <Header />
      <main>
        <Outlet />
      </main>
    </CarsContext>
  )
}

export default Root
