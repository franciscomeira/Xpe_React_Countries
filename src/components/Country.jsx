export default function Country({ childre: country = null }) {
  if (!country) {
    return <div>Impossivel renderizar o país</div>;
  }
  return <div>{country.name}</div>;
}
