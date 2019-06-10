
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle, addStudent, removeStudent } from './actions/RootAction'
import { SelectionState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
} from '@devexpress/dx-react-grid-material-ui';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';


class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     articles: [
  //       // { title: "React Redux Tutorial for Beginners", id: 1 },
  //       // { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
  //     ]
  //   };
  // }
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'Email', title: 'Email' },
        { name: 'Gender', title: 'Gender' },
        { name: 'Country', title: 'Country' },
        { name: 'Hobby', title: 'Hobby' }
      ],
      //rows: generateRows({ length: 6 }),
      // rows: [{ "Email": "ruchi", "Gender": "Female", "Country": "India", "Hobby": "Art" },
      // { "Email": "ruchi", "Gender": "Female", "Country": "India", "Hobby": "Art" }],
      students: this.props.students,
      selection: [],
      showForm: false,
      country: 'Canada',
      gender: 'Female',
      hobbies: [' Travel '],
      email: '',
      password: '',
      rePassword: '',
      editForm: false
    };

    this.changeSelection = selection => {
      this.setState({ selection });
    }
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      students: nextProps.students
    })
  }

  handleAddClick = (isEditConnection) => {
    debugger;

    //this.validate();
    var student = {
      Email: this.state.email,
      Gender: this.state.gender,
      Country: this.state.country,
      Hobby: this.state.hobbies
    }
    this.props.addStudent(student);
    this.setState({ showForm: false });
  }

  handleEditClick = () => {
    debugger;
    console.log(this.state.selection);
    this.setState({ editForm: true });
    if (this.state.selection.length == 1) {

      var selectedStudent = this.state.selection[0];
      const student = this.props.students[selectedStudent];

      this.setState({
        email: student.Email, gender: student.Gender,
        country: student.Country, hobbies: student.Hobby
      });

      this.forceUpdate();
      this.setState({ showForm: true });
    }
  }

  handleDeleteClick = () => {
    this.props.removeStudent(this.state.selection)
  }

  handleEditSubmit = () => {
    var student = {
      Email: this.state.email,
      Gender: this.state.gender,
      Country: this.state.country,
      Hobby: this.state.hobbies
    }
  }

  handleForm = (value) => {
    debugger;
    this.setState({ email: '', gender: '', country: '', hobbies: '' })
    this.setState({ showForm: value });
  }


  handleCountryChange = (event) => {
    this.setState({ country: event.target.value });
  }

  onGenderChange = (value) => {
    this.setState({ gender: value });
  }

  hobbiesChanged = (newValues) => {
    this.setState({ hobbies: newValues });
  }

  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value })
  }

  rePpasswordChangeHandler = (event) => {
    this.setState({ rePassword: event.target.value })
  }

  render() {

    const { students, columns, selection, email } = this.state;

    return (
      <div>
        <div style={{ fontSize: "30px", margin: "10px", textAlign: "center" }}>
          Social Pilot Student Management System
        </div>
        <div style={{ height: "40px", span: "5px", width: "80%", margin: 'auto', marginBottom: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ display: "inline-block", marginTop: "10px", marginLeft: "28px" }}
            onClick={() => this.handleForm(true)}
          //{() => this.handleAddClick(false)}
          >
            Add Student
          </Button>

          <Button
            variant="contained"
            color="primary"
            style={{ width: "155px", display: "inline-block", marginTop: "10px", marginLeft: "28px" }}
            onClick={() => this.handleEditClick()}
          >
            Edit Employee
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ display: "inline-block", marginTop: "10px", marginLeft: "28px" }}
            onClick={() => this.handleDeleteClick()}
          >
            <span style={{ cursor: "pointer" }}>
              Delete Employee
          </span>
          </Button>
        </div>

        <Paper style={{ width: "80%", margin: 'auto' }}>
          <Grid
            rows={this.state.students}
            columns={columns}
          >
            <SelectionState
              selection={selection}
              onSelectionChange={this.changeSelection}
            />
            <Table />
            <TableHeaderRow />
            <TableSelection />
          </Grid>


          {this.state.showForm == true &&
            <Dialog
              style={{ width: "100%" }}
              //fullScreen={true}
              open={this.state.showForm}
              aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
              <DialogContent>

                <DialogContentText>
                  Add the student details in given below form. Please fill the details carefully.
          </DialogContentText>

                <TextField autoFocus margin="dense"
                  id="email"
                  label="Email Adress:"
                  type="email"
                  style={{ width: "70%" }}
                  fullWidth
                  onChange={(event) => this.emailChangeHandler(event)}
                  value={this.state.email}
                >

                </TextField><br /><br />

                <TextField autoFocus margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  style={{ width: "70%" }}
                  onChange={(event) => this.passwordChangeHandler(event)}
                  value={this.state.password}
                >
                </TextField><br /><br />

                <TextField autoFocus margin="dense"
                  id="password"
                  label="Retype Password"
                  type="password"
                  style={{ width: "70%" }}
                  onChange={(event) => this.rePpasswordChangeHandler(event)}
                  value={this.state.rePassword}
                >
                </TextField><br /><br />

                <div style={{ marginBottom: "3%" }}>
                  <InputLabel
                    style={{ width: "20%", display: 'inline' }} >
                    Country:
               </InputLabel>

                  <select
                    style={{
                      width: "182px", display: 'inline', height: '54px', marginLeft: '20px', cursor: 'pointer', borderColor: 'rgb(224, 224, 224)', borderRadius: '1px'
                    }}
                    value={this.state.country} onChange={this.handleCountryChange}
                  >
                    <option value="India">India</option>
                    <option value="U.S.A.">U.S.A.</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>

                <div style={{ width: '49.4%' }}>
                  <InputLabel
                    style={{ width: "20%", display: 'inline', marginBottom: '15px' }} >
                    Gender:
               </InputLabel>

                  <RadioGroup
                    onChange={this.onGenderChange}
                    horizontal
                    value={this.state.gender}
                  >
                    <RadioButton value="Male">
                      Male
              </RadioButton>
                    <RadioButton value="Female">
                      Female
            </RadioButton>
                  </RadioGroup>
                </div>
                {/* <ul>{this.props.articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>; */}

                <div
                  style={{ marginTop: '15px' }}
                >
                  <InputLabel
                    style={{ width: "20%", display: 'inline', marginBottom: '15px' }} >
                    Hobbies:
               </InputLabel>
                  <CheckboxGroup
                    name="hobbies"
                    checkboxDepth={2}
                    value={this.state.hobbies}
                    onChange={this.hobbiesChanged}>
                    <label><Checkbox value=" Travel " />Travel</label>
                    <label><Checkbox value=" Dance " />Dance</label>
                    <label><Checkbox value=" singing " />Singing</label>
                    <label><Checkbox value=" Painting " />Painting</label>
                  </CheckboxGroup>
                </div>
              </DialogContent>

              <DialogActions >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.state.editForm ? () => this.handleEditSubmit() : () => this.handleAddClick(false)}
                  disabled={this.props.Edit}>
                  Submit
         </Button>

                <Button
                  variant="contained"
                  color="primary" onClick={() => this.handleForm(false)}
                >
                  Close
         </Button>
              </DialogActions>
            </Dialog >
          }
        </Paper>
      </div>
    );

    // const { articles } = this.state;
    // return(
    // <div>
    //   <ul>{this.props.articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;


    // </div>
    // )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    students: state.students
  };
}

const mapDispatchToProps = {
  addArticle,
  addStudent,
  removeStudent
};

//export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
