import { createContext, ReactNode, useEffect, useState } from 'react'

interface LocationRegion {
  id: number
  nome: string
  mesorregiao: {
    id: number
    nome: string
    UF: {
      id: number
      nome: string
      sigla: string
      regiao: Object
    }
  }
}

export interface Location {
  id: number
  nome: string
  microrregiao: LocationRegion
}

interface LocationContextType {
  locations: Location[]
  currentLocation: Location | null
  locationModalIsOpen: boolean
  setNewCurrentLocation: (location: Location) => void
  toggleOpenModal: () => void
}

interface LocationContextProviderProps {
  children: ReactNode
}

export const LocationContext = createContext({} as LocationContextType)

const ibgeAPI =
  'https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome'

export function LocationContextProvider({
  children,
}: LocationContextProviderProps) {
  const [locations, setLocations] = useState([])
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null)
  const [locationModalIsOpen, setLocationModalIsOpen] = useState(false)

  useEffect(() => {
    const storedLocationsAsJSON = localStorage.getItem(
      '@coffe-delivery:locations-1.0.0',
    )

    if (storedLocationsAsJSON) {
      setLocations(JSON.parse(storedLocationsAsJSON))
    } else {
      fetch(ibgeAPI)
        .then((response) => response.json())
        .then((data) => {
          setLocations(data)

          localStorage.setItem(
            '@coffe-delivery:locations-1.0.0',
            JSON.stringify(data),
          )
        })
    }
  }, [])

  function setNewCurrentLocation(location: Location) {
    setCurrentLocation(location)
    toggleOpenModal()
  }

  function toggleOpenModal() {
    setLocationModalIsOpen(!locationModalIsOpen)
  }

  return (
    <LocationContext.Provider
      value={{
        locations,
        currentLocation,
        setNewCurrentLocation,
        toggleOpenModal,
        locationModalIsOpen,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
