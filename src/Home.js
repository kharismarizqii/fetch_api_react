import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    id: `${data.id.name}`,
                    Name: `${data.name.title} ${data.name.first} ${data.name.last}`,
                    gender: `${data.gender}`,
                    age: `${data.dob.age}`,
                    email: `${data.email}`,
                    location: `${data.location.street.number},${data.location.street.name},${data.location.city},${data.location.state}, ${data.location.country}`,
                    thumbnail: `${data.picture.large}`,


                }
            )))
            .then(items => this.setState({
                items,
                isLoaded: false
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { items } = this.state;
        return (
            <div className="boxWhite">
                <h2>Random User</h2>
                {
                    items.length > 0 ? items.map(item => {
                        const { id, Name, gender, age, email, location, thumbnail } = item;
                        return (

                            <div key={id} className="bgCircle">
                                <center><img src={thumbnail} alt={Name} className="circle" /> </center><br />
                                <div className="ctr">
                                    {Name}<br />
                                    {gender}<br />
                                    {age}<br />
                                    {email}<br />
                                    {location}<br />
                                </div>

                            </div>
                        );
                    }) : null
                }
            </div>
        );

    }
}

export default Home;