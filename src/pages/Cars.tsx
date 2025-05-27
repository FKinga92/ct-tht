import {useContext} from 'react'
import {CarsContext} from '../context/CarsContext'
import Car from '../components/cars/Car'
import {CarsSC} from './Cars.styled'
import {CarSC} from '../components/cars/Car.styled'
import {useNavigate} from 'react-router'

const CarsPage = () => {
  const navigate = useNavigate()
  const {vendorAvails} = useContext(CarsContext)

  if (!vendorAvails) return null

  const availableVehicles = Object.values(vendorAvails)

  return (
    <CarsSC>
      {availableVehicles.map(car => (
        <CarSC key={car._id} onClick={() => navigate(`/cars/${car._id}`)}>
          <Car car={car} />
        </CarSC>
      ))}
    </CarsSC>
  )
}

export default CarsPage
