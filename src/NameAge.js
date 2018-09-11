import React, { Component } from 'react';

class NameAge extends Component {
    render() {
        // let name = "Melissa"

        let data = [{name: "Karla ", age: 26},{name: "Fernanda ", age: 26},{name: "Tania ", age: 26}];
        return (
            <div >
                {data.map(function(d, idx){
                    return (<li key={idx}>Name: {d.name}, Age: {d.age}</li>)
                })}
                {/* <p>Hello {name}</p> */}
            </div>

        );
    }
}

export default NameAge;