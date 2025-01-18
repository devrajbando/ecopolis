import React, { useState, useEffect } from 'react';
import { useMapEvents, Popup, Circle } from 'react-leaflet';

const MapClickHandler = ({ setIsSidebarOpen, setAllData, allData, clickedPoint, setClickedPoint }) => {

  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setClickedPoint({ lat, lng });
      setIsSidebarOpen(null);
    },
  });

  const fetchData = async (lat, lon) => {
    const biodiversityUrl = `https://api.gbif.org/v1/occurrence/search?decimalLatitude=${lat.toFixed(0)}&decimalLongitude=${lon.toFixed(0)}&radius=10`;
    const weatherApiKey = '9cdf050abe7b42592268c0bf78c0195a';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;

    try {
      const [biodiversityResponse, weatherResponse] = await Promise.all([
        fetch(biodiversityUrl),
        fetch(weatherUrl)
      ]);

      const { count } = await biodiversityResponse.json();
      const weatherData = await weatherResponse.json();

      setAllData({ biodiversityCount: count, weather: weatherData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (allData) {
      console.log("Fetched Data:", allData);
    }
  }, [allData]);

  const handleClick = async () => {
    if (clickedPoint) {
      await fetchData(clickedPoint.lat, clickedPoint.lng);
      setIsSidebarOpen('true');
    }
  };

  return clickedPoint && (
    <>
      <Circle 
        center={[clickedPoint.lat, clickedPoint.lng]} 
        pathOptions={{ color: 'green', fillColor: 'green' }} 
        radius={100}
      >
        <Popup>
          <div className="pt-1">
            <h3 className="font-semibold">Analysis Point</h3>
            (Lat: {clickedPoint.lat.toFixed(4)},
            Lng: {clickedPoint.lng.toFixed(4)})<br></br>
            <button 
              onClick={handleClick}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
            >
              Analyze Location
            </button>
          </div>
        </Popup>
      </Circle>
    </>
  );
};

export default MapClickHandler;