import React from "react";

const Movie = () => {
  const movies = [
    {
      title: "Cookie",
      likes: "1-1 M Likes",
      genres: "Action/Thriller",
    },
    {
      title: "War 2",
      likes: "1-1 M Likes",
      genres: "Action/Thriller",
    },
    {
      title: "Thalakran Thalakril",
      votes: "8,170 31kVotes",
      genres: "Comedy/Drama/Romantic",
    },
    {
      title: "Mahavatar Natsimha",
      votes: "9,710 21.15kVotes",
      genres: "Action/Animation/Drama",
    },
    {
      title: "Housemates",
      votes: "8,810 2.56Votes",
      genres: "Comedy/Fantasy/Horror",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {/* Promo Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Unlock $500 off on LIVE gigs</h1>
        <button className="mt-4 bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300">
          Apply Now
        </button>
      </div>

      {/* Recommended Movies Section */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Movies</h2>
        
        <div className="space-y-4">
          {movies.map((movie, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{movie.title}</h3>
                  <p className="text-sm text-gray-500">{movie.genres}</p>
                </div>
                <div className="text-right">
                  {movie.likes && <p className="text-sm text-gray-600">{movie.likes}</p>}
                  {movie.votes && <p className="text-sm text-gray-600">{movie.votes}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Footer */}
      <div className="bg-gray-100 px-6 py-3 text-right">
        <p className="text-sm text-gray-600">27°C: Mainly cloudy</p>
      </div>
    </div>
  );
};

export default Movie;