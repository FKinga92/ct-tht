import {useContext} from 'react'
import {CarsContext} from '../context/CarsContext'
import {useParams} from 'react-router'
import Car from '../components/cars/Car'

const CarDetailsPage = () => {
  const {id} = useParams()
  const {vendorAvails} = useContext(CarsContext)
  const car = id && vendorAvails?.[id]
  if (!car) return null

  return <Car car={car} />
}

export default CarDetailsPage
