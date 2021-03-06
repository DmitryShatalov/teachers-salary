import React, { Component } from "react";
import firebase from '../../Firestore'
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";

interface MyProps { }

interface MyState {
  id: number,
  name: string,
  salary: number,
  percentLessThanYear: number,
  percentMoreThanYear: number,
  amountLessThanYear: number,
  amountMoreThanYear: number,
  summary: number
}


class Teachers extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      id: 0,
      name: '',
      salary: this.getData().salary,
      percentLessThanYear: 0,
      percentMoreThanYear: 0,
      amountLessThanYear: 0,
      amountMoreThanYear: 0,
      summary: 0
    }
  }
   db = firebase.firestore();
   
  getData() {
    let data
    this.db.collection('teachers').doc('LA')
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        data = doc.data()
    });
    return data
  }
 
  setTeacher = (event: any) => {
    const db = firebase.firestore();
    this.db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection('teachers').doc('LA').set({
      name: this.state.name,
      salary: this.state.salary
    });
  }

  onInputChange(event: any) {
    const id = event.target.id;
    const value = event.target.value;
    console.log(`${id} ${value}`)
    this.setState({ [id]: value } as MyState);
  }

  render() {
    this.getData()
    return (
      <Paper>
        <form onSubmit={this.setTeacher}>
          <TextField id="name" type="text" label="ФИО" value={this.state.name} onChange={this.onInputChange} />
          <TextField id="salary" type="number" label="Оклад" value={this.state.salary} onChange={this.onInputChange} />
          <button type="submit">Submit</button>
        </form>
      </Paper>
    );
  }
}

export default Teachers;
