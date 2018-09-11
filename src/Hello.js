import React, { Component } from 'react';

class Hello extends Component {
    render() {
        // let name = "Melissa"

        let data = [{name: "Karla ", age: 26},{name: "Fernanda ", age: 26},{name: "Tania ", age: 26}];
        return (
            <div >
                {data.map(function(d, idx){
                    return (<li key={idx}>Hello, {d.name}</li>)
                })}
                {/* <p>Hello {name}</p> */}
            </div>

        );
    }
}

export default Hello;