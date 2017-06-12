import React from "react";
import "./CampaignList.scss";
import {SimpleForm} from './SimpleForm'

export class CampaignList extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div>
        <SimpleForm data={this.props.data}/>
      </div>
    );
  }
}