import Country from './Country';

export default function Countries({ children: countries = [] }) {
  return (
    <div>
      <h2 className="text-center font-semibold">
        {' '}
        {countries.length} países(es){' '}
      </h2>
      <Country>{countries[0]}</Country>
    </div>
  );
}
