import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', { id: 'heading' }, 'Hello from react');

const root = ReactDOM.createRoot(document.getElementById('root'));

const JSXheading = () => <h1 id="heading">Hello from JSXheading</h1>;

//ReactComponent

//Component Composition

const number = 2000;

const FunctionalComponent = () => {
    return (
        <div className="container">
            {number}
            <h2>{number}</h2>
            {JSXheading()}
            <JSXheading />
            <JSXheading></JSXheading>
            <h1 className="heading">Hello World</h1>
        </div>
    );
};

// const functionalComponent2 = () => (
//     <h1 className="heading">Hello from FC2</h1>
// );

// const functionaLComponent3 = () => <h1>Hello World</h1>

// root.render(heading);
// root.render(JSXheading);

root.render(<FunctionalComponent />);
