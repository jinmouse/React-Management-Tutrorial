import React from 'react';

class Customer extends React.Component{
    render(){
        return(
        <div>
           <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}></CustomerProfile>
           <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}></CustomerInfo>
        </div>
        )

    }
}

class CustomerProfile extends React.Component {
    render(){
        return(
            <div>
                <image src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render(){
        return(
        <div>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )

    }
}

export default Customer;