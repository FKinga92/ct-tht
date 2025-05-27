import {createContext} from 'react'
import type {TCarsContext} from './types'
import {EMPTY_OBJ} from '../types/constants'

export const CarsContext = createContext<TCarsContext>(EMPTY_OBJ)
