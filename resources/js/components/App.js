import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: '',
            deadline: ''
        };
        // bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleDatePickerChange(date, name) {
        this.setState({
            [name]: date
        })
    }

    // handle submit
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .post('/projects', {
                name: this.state.name,
                summary: this.state.summary,
                commentary: this.state.commentary,
                start_date: this.state.startDate,
                deadline: this.state.deadline,
            })
            .then(response => {
                console.log('from handle submit', response);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Project </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            name="name"
                                            type="text"
                                            value={this.state.name}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placeholder="Name"
                                            required
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="summary"
                                            value={this.state.summary}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placeholder="Summary"
                                            required
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="commentary"
                                            value={this.state.commentary}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placeholder="Commentary"
                                            required
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <DatePicker
                                            selected={ this.state.startDate }
                                            onChange={(date)=>this.handleDatePickerChange(date, 'startDate')}
                                            name="startDate"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <DatePicker
                                            selected={ this.state.deadline }
                                            onChange={(date)=>this.handleDatePickerChange(date, 'deadline')}
                                            name="deadline"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" >
                                        Create Project
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
