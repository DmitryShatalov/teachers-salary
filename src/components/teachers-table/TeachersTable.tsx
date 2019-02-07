import React, { Component } from "react";
import firebase from '../../Firestore'
import "./TeachersTable.css";
import Teachers from "../teachers/Teachers";


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


class TeachersTable extends Component<MyProps, MyState> {

  constructor(props: any) {
    super(props);
    const NAME = this.getData()
    console.log(NAME)

    this.onInputChange = this.onInputChange.bind(this)
  }

  getData() {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);
  }
  onInputChange(event: any) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value } as MyState);
  }

  render() {

    return (
      <Teachers />
    );
  }
}

export default TeachersTable;
