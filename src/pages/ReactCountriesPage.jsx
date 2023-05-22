import Header from '../components/Header';
import Main from '../components/Main';
import { allCountries } from '../data/countries';
import TextInput from '../components/TextInput';
import { useState } from 'react';
import Countries from '../components/Countries';

export default function ReactCountriesPage() {
  const [CountryFilter, setCountryFilter] = useState('Brazil');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }
  const CountryFilterLowercase = CountryFilter.trim().toLocaleLowerCase();

  // prettier-ignore
  const filteredCountries = 
  CountryFilterLowercase.length >= 3
  ? allCountries.filter(({ nameLowerCase }) => {
    return nameLowerCase.includes(CountryFilterLowercase);
   })
   :allCountries;

  return (
    <div>
      <Header>React-Countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do Pais (Pelo menos 3 caracteres)"
          inputValue={CountryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />
        <Countries>{filteredCountries} </Countries>
      </Main>
    </div>
  );
}
