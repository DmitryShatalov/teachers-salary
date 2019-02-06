import React, { Component } from "react";
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


class TeachersTable extends Component<MyProps, MyState> {
  

  render() {

    return (
    <Teachers/>
    );
  }
}

export default TeachersTable;
