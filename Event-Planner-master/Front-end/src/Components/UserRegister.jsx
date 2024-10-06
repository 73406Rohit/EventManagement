import React, { Component } from 'react';
import UserService from "../Services/UserServices";
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";

class UserRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userEmail: '',
            password: '',
            comfirmPassword: '',
            userGender: '',
            userDOB: '',
            contactNo: '',
            securityQuestion: '',
            securityAnswer: '',
            userRole: '',
            houseNo: '',
            streetName: '',
            landmark: '',
            city: '',
            district: '',
            State: '',
            country: '',
            zipCode: '',
            errors: {}
        };

        this.saveUser = this.saveUser.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userEmail: this.state.userEmail,
                password: this.state.password,
                userGender: this.state.userGender,
                userDOB: this.state.userDOB,
                contactNo: this.state.contactNo,
                securityQuestion: this.state.securityQuestion,
                securityAnswer: this.state.securityAnswer,
                userRole: this.state.userRole,
                userAddress: {
                    houseNo: this.state.houseNo,
                    streetName: this.state.streetName,
                    landmark: this.state.landmark,
                    city: this.state.city,
                    district: this.state.district,
                    state: this.state.State,
                    country: this.state.country,
                    zipCode: this.state.zipCode
                }
            };

            UserService.addUser(user).then(res => {
                alert("Registration Successful!");
                this.props.history.push('/user/login');
            }).catch(err => {
                console.log(err);
            });
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    validateForm() {
        let errors = {};
        let formIsValid = true;

        if (!this.state.firstName) {
            formIsValid = false;
            errors["firstName"] = "*Please enter your First Name.";
        }

        if (typeof this.state.firstName !== "undefined") {
            if (!this.state.firstName.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!this.state.lastName) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your last Name.";
        }

        if (typeof this.state.lastName !== "undefined") {
            if (!this.state.lastName.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lastName"] = "*Please enter alphabet characters only.";
            }
        }

        if (!this.state.userEmail) {
            formIsValid = false;
            errors["emailId"] = "*Please enter your email-ID.";
        }

        if (typeof this.state.userEmail !== "undefined") {
            var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
            if (!pattern.test(this.state.userEmail)) {
                formIsValid = false;
                errors["emailId"] = "*Please enter valid email-ID.";
            }
        }

        if (!this.state.contactNo) {
            formIsValid = false;
            errors["mobileNo"] = "*Please enter your mobile no.";
        }

        if (typeof this.state.contactNo !== "undefined") {
            if (!this.state.contactNo.match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileNo"] = "*Please enter valid mobile no.";
            }
        }

        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if ((this.state.comfirmPassword).localeCompare(this.state.password) !== 0) {
            formIsValid = false;
            errors["comfirmassword"] = "*Password should match.";
        }

        if (!this.state.streetName) {
            formIsValid = false;
            errors["streetName"] = "*Please enter your street name.";
        }

        if (!this.state.landmark) {
            formIsValid = false;
            errors["landmark"] = "*Please enter your landmark.";
        }

        if (!this.state.city) {
            formIsValid = false;
            errors["city"] = "*Please enter your city.";
        }

        if (!this.state.zipcode) {
            formIsValid = false;
            errors["zipCode"] = "*Please enter zipcode.";
        }

        if (!(this.state.zipcode.length === 6)) {
            formIsValid = false;
            errors["zipcode"] = "*Please enter a valid zipcode.";
        }

        if (!this.state.userDOB) {
            formIsValid = false;
            errors["userDOB"] = "*Please select your date of birth.";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    render() {
        return (
            <div className="container-fluid" style={{ marginTop: "20px" }}>
                <h4>EVENT MANAGEMENT SYSTEM</h4>
                <h1><Badge variant="secondary">Register here</Badge></h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="Enter first name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} required />
                        <div className="errorMsg">{this.state.errors.firstName}</div>
                    </div>

                    {/* Add other form fields similarly */}
                    
                    <Button variant="primary" onClick={this.saveUser}>Register</Button>
                </form>
            </div>
        );
    }
}

export default UserRegister;
