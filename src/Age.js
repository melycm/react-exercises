import React, { Component } from 'react';

class Age extends Component {
    render() {
        // let name = "Melissa"

        let data = [{name: "Karla ", age: 26},{name: "Fernanda ", age: 26},{name: "Tania ", age: 26}, {name: "Robert", age: 19}];
        return (
            <div >
                {data.map(function(d, idx){
                    let legalAge;
                    if(d.age > 21){
                        legalAge = 'You can party at Moon Tower'
                    }else{
                        legalAge = 'You cant party at Moon Tower :('
                    }
                    return (<li key={idx}>Name: {d.name}, Age: {d.age}, {legalAge}</li>)
                })}
                {/* <p>Hello {name}</p> */}
            </div>

        );
    }
}

export default Age;