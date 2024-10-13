import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://quiz-api-rho.vercel.app/api/mobile-apps')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatSize = (size) => {
    return size >= 1000 ? `${(size / 1000).toFixed(1)} GB` : `${size} MB`;
  };

  const renderStars = (rating) => {
    const validRating = Math.max(1, Math.min(rating, 5));
    return (
      <div className="flex text-yellow-500">
        {Array.from({ length: validRating }, (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-200 p-5">
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold">Find your data that you need!</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {(Array.isArray(data) ? data : [data]).map(app => (
          <div key={app._id} className="h-96 bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="flex flex-col w-2/3 p-4 justify-between">
              <div>
                <h1 className="text-gray-900 font-bold text-4xl mb-4">{app.name}</h1>
                <small className="mt-2">Release Year: {app.release_year}</small>
                <p className="mt-4 text-gray-600 text-base">{app.description}</p>
                <div className="item-center mt-2 text-gray-500 ">
                  <span>{app.category}</span>
                  <span className="font-bold text-gray-900" > {formatSize(app.size)}</span>
                  <span>, {app.is_android_app ? 'Android' : ''} {app.is_ios_app ? 'iOS' : ''}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">{app.price === 0 ? 'FREE' : `Rp ${app.price}`}</h1>
                {renderStars(app.rating)}
              </div>
            </div>
            <img src={app.image_url} className="w-1/3 object-cover" alt={app.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
