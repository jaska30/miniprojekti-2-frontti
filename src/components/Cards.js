import React, { Component } from 'react';

class Cards extends Component {
    render() {
            
        var all = this.props.info
            .map(function (img, index) {
                const bdata = img.img.data.map(n=>String.fromCharCode(n)).join("")
                return <li key={index+img.name}><img src={"data:image/jpg;base64," + bdata}/></li>
            })
        return (
            <div>
                <ul className="userlist">
                    {all}
                </ul>
            </div>
        );
    }
}

export default Cards;