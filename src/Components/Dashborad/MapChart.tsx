import {
    ComposableMap, Geography, Geographies, Marker
} from 'react-simple-maps';
import { isDark } from "../../store/store";
import { useAtomValue } from "jotai";

const cities = [
    { name: "New York", lat: 40.7128, lng: -74.0060 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 }
];

const Revenue = [
    { name: "New York", revenue: 72 },
    { name: "San Francisco", revenue: 39 },
    { name: "Sydney", revenue: 25 },
    { name: "Singapore", revenue: 61 }
];


const MapChart = () => {
    const isThemedark = useAtomValue(isDark)
    const mapFill = isThemedark ? '#677680' : '#cfdfea';
    const mapStroke = isThemedark ? '#000000' : '#ffffff'
    const markerInnerColor = isThemedark ? '#000000' : '#c6c7f8'
    return (
        <div className="w-full h-full px-8 pt-4 bg-[#f7f9fb] dark:bg-[#282828] rounded-2xl">
            <div className='text-primary-text-light dark:text-primary-text-dark flex justify-center text font-bold'>Revenue by Location</div>
            <ComposableMap className='w-full h-full bg-[rgba(247, 249, 251, 1)] -mt-22' projection="geoEqualEarth" >
                <Geographies geography="/topo.json">
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => console.log(geo.properties.name)}
                                    fill={mapFill}
                                    stroke={mapStroke}
                                />
                            )
                        })}
                </Geographies>
                {
                    cities.map(city =>
                        <Marker id={city.name} coordinates={[city.lng, city.lat]}>

                            <circle r={10} fill="white" />
                            <circle r={6} fill={markerInnerColor} />
                        </Marker>
                    )
                }
            </ComposableMap>
            <div className='text-primary-text-light dark:text-primary-text-dark -mt-20'>
                {Revenue.map(city => (
                    <div key={city.name} className="mb-2">
                        <div className="flex justify-between" id={city.name}>
                            <div>{city.name}</div>
                            <div>{city.revenue}K</div>
                        </div>

                        <div className="h-0.5 bg-[#e6eef5] rounded-4xl">
                            <div
                                className="h-full bg-[#a8c5da] rounded-4xl"
                                style={{ width: `${city.revenue}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapChart