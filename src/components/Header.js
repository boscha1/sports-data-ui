import React from 'react';

const Header = ({ title }) => {
    return (
        <header  className="text-3xl font-bold underline">
            <h1>{title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'NFL Teams'
}

export default Header;