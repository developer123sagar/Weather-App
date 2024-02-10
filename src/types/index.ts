export type CityOptions = {
    lat: number,
    long: number,
    label: string;
}

export type LocationSearchProps = {
    label?: string;
    placeH: string;
    onSearchChange: (searchData: CityOptions) => void
}