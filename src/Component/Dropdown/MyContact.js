import React, { Component } from 'react';

class MyContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: {
                headerA: ['Abe', 'Achemist', 'Antonio', 'Anna', 'Alberto', 'Adam', 'Alessandro', 'Alan', 'Alectico'],
                headerB: ['Bach', 'Barbara', 'Bonnie', 'Berlusconi', 'Babarian'],
                headerC: ['Carl', 'Conte', 'Carlos', 'Cherry', 'Columbus']
            }
        }
    }

    onChange = () => {
        var filterValue = document.getElementById('filterInput').value.toUpperCase();
        var ul = document.getElementById('cards');
        var li = ul.querySelectorAll('.list-group-item');

        for (var i = 0; i < li.length; i++) {
            var p = li[i].getElementsByTagName('p')[0];
            if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                li[i].style.display = '';
            }
            else {
                li[i].style.display = 'none';
            }
        }
    }
    showListGroup = (project) => {
        let result = null
        result = project.map((list, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <p>{list}</p>
                </li>
            )
        })
        return result
    }
    render() {
        let { headerA, headerB, headerC } = this.state.project

        return (
            <div className="container my-5">
                <h1 className="text-center display-4">
                    My contacts
                </h1>
                <input
                    type="text"
                    id="filterInput"
                    className="form-control my-4"
                    name="filterInput"
                    value={this.state.filterInput}
                    placeholder="Search names...."
                    onChange={this.onChange}
                />
                <div className="card" id="cards">
                    <div>
                        <div className="card-header">
                            <h5>A</h5>
                        </div>
                        <ul className="list-group">
                            {this.showListGroup(headerA)}
                        </ul>
                    </div>

                    <div className="card-header">
                        <h5>B</h5>
                    </div>
                    <ul className="list-group">
                        {this.showListGroup(headerB)}
                    </ul>

                    <div className="card-header">
                        <h5>C</h5>
                    </div>
                    <ul className="list-group">
                        {this.showListGroup(headerC)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MyContact;