import React from "react";

const CategoryBlock = ({ ui, content }) => {
    return (
        <>
            <div key={ui} className="category-block-container">
                <h2 className="category-title">{content.category}</h2>
                <div className="movies-container">
                    {content.movies.map((i, idx) => (
                        <div
                            key={idx}
                            className="movie-card"
                        >
                            <div className="movie-poster" style={{
                                backgroundImage: `url("${i.poster}")`,
                            }}></div>
                            <div className="movie-title">{i.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryBlock;
