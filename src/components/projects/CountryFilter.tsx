interface CountryFilterProps {
  countries: string[];
  selectedCountry: string;
  onChange: (country: string) => void;
}

export default function CountryFilter({
  countries,
  selectedCountry,
  onChange,
}: CountryFilterProps) {
  return (
    <div className="mb-5">
      <label htmlFor="country" className="block text-sm font-medium mb-1">
        Filtrar por país
      </label>

      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-bluesky-strong cursor-pointer"
      >
        <option value="">🌍 Todos los países</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
