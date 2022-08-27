import { ArrowDown, MagnifyingGlass, MapPinLine, X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Location, LocationContext } from '../../contexts/LocationContext'
import {
  CloseButton,
  LocationContainer,
  LocationList,
  ScrollIconContainer,
} from './styles'

export function LocationSearch() {
  const { locations, setNewCurrentLocation, toggleOpenModal } =
    useContext(LocationContext)
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([])

  function handleFilterLocations(value: string) {
    if (value.length > 3) {
      const filtered = locations.filter((location) =>
        location.nome.toLowerCase().includes(value.toLowerCase()),
      )

      setFilteredLocations(filtered)
    } else {
      setFilteredLocations([])
    }
  }

  function handleSetCurrentLocation(location: Location) {
    setNewCurrentLocation(location)
  }

  function handleToggleLocationModal() {
    toggleOpenModal()
  }

  return (
    <LocationContainer>
      <div>
        <header>
          <CloseButton type="button" onClick={handleToggleLocationModal}>
            <X size={22} />
          </CloseButton>
          <MapPinLine size={48} />
          <h2>Onde você quer receber seu pedido?</h2>

          <fieldset>
            <MagnifyingGlass size={22} />
            <input
              type="text"
              placeholder="Buscar cidade"
              onChange={(e) => handleFilterLocations(e.target.value)}
            />
          </fieldset>
        </header>

        {!!filteredLocations.length && (
          <LocationList>
            {filteredLocations.map((location) => {
              return (
                <li
                  key={location.id}
                  onClick={() => handleSetCurrentLocation(location)}
                >
                  {location.nome +
                    ', ' +
                    location.microrregiao.mesorregiao.UF.sigla}
                </li>
              )
            })}
          </LocationList>
        )}

        {filteredLocations.length > 6 && (
          <ScrollIconContainer>
            <ArrowDown size={22} />
          </ScrollIconContainer>
        )}
      </div>
    </LocationContainer>
  )
}
