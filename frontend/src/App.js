import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CategoryBlock from "./components/CategoryBlock";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/movies")
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          const resData = response.data.data;
          setMoviesData([...resData]);
          setLoading(false);
        } else {
          console.log("Something went wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="movies-page-container">
        <Header />
        {!loading ? (
          <div className="categories-container">
            {moviesData.map((i, idx) => (
              <CategoryBlock ui={idx} content={i} />
            ))}
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>

      <style jsx={"true"}>
        {`
                    body {
                        margin: 0;
                    }

                    .categories-container {
                        padding: 2rem;
                    }

                    .category-title {
                        text-transform: uppercase;
                        font-family: 'Circular-Loom';
                    }
    
                    .movies-container {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 1rem;
                    }

                    .movie-card {
                        margin: 0 1rem 1rem 0;
                    }
    
                    .movie-poster {
                        width: 100%;
                        height: 240px;
                        border-radius: 4px;
                        background-size: cover;
                        background-position: center;
                        margin-bottom: 1rem;
                    }

                    .movie-title {
                        font-family: 'Circular-Loom';
                    }
                `}
      </style>
    </>
  );
};

export default App;
