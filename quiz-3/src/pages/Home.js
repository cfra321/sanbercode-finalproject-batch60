import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://quiz-api-rho.vercel.app/api/mobile-apps')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatSize = (size) => {
    return size >= 1000 ? `${(size / 1000).toFixed(1)} GB` : `${size} MB`;
  };

  return (
    <section className="bg-gray-200 p-5">
      <div className="container mx-auto mt-10">
        <h1 className="text-xl font-bold ">Find your data that you need!</h1>
      </div>
      <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
        {Array.isArray(data) && data.map(app => (
          <div key={app.id} className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={app.attributes.image_url} className="w-1/3 bg-cover bg-center" alt={app.attributes.name} />
            <div className="w-2/3 p-4">
              <h1 className="text-gray-900 font-bold text-2xl">{app.attributes.name}</h1>
              <small>Release Year: {app.attributes.release_year}</small>
              <p className="mt-2 text-gray-600 text-sm">{app.attributes.description}</p>
              <div className="item-center mt-2 text-gray-500">
                <span>{app.attributes.category} </span>
                <span>{formatSize(app.attributes.size)}</span>
                <span>, {app.attributes.is_android_app ? 'Android' : ''} {app.attributes.is_ios_app ? 'iOS' : ''}</span>
              </div>
              <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">{app.attributes.price === '0' ? 'FREE' : `Rp ${app.attributes.price}`}</h1> {/* Perhatikan disini, jika price adalah '0' maka tampilkan 'FREE' */}
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  {app.attributes.rating} Ratings
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
