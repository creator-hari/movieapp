import React from 'react';

const Header = () => {
    return (
        <>
            <div className="header-container">
                <h4 className="header-title">Wookie Movies</h4>
            </div>

            <style jsx={"true"}>
                {`
                .header-container {
                    height: 100px;
                    left: 0;
                    right: 0;
                    position: sticky;
                    top: 0;
                    border-bottom: 2px solid black;
                    background: white;
                }

                .header-container .header-title {
                    font-size: 32px;
                    font-weight: 600;
                    margin: 0;
                    text-transform: uppercase;
                    font-family: 'Circular-Loom';
                    padding: 2rem;
                }
                `}
            </style>
        </>
    );
}

export default Header;
