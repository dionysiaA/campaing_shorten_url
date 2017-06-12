import React from "react";
import './SimpleForm.scss'
import {HorizontalList} from './HorizontalList.jsx'

export class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (evt, data) => {
    console.log('ad has been submitted', data)
    this.props.data.generateShortUrl(this.props.data.dressSelected.designer, this.props.data.dressSelected.dressName)
  }

  render() {
    return (
      <div className='app-container'>
        <h1 className='title'>Create Add for Campaign 'Love the Dress'</h1>
        <Form onSubmit={this.onSubmit} data={this.props.data}/>
      </div>
    )
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ad_name: '',
      dress: '',
      message: ''
    };
  }

  onValueChangeHandler(paramName) {
    return (event) => {
      let _tmpState = this.state;
      _tmpState[paramName] = event.target.value;
      this.setState(_tmpState);
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <EditableInput
          name='Name'
          title='Advertisement Name'
          value={this.state.ad_name}
          onChange={this.onValueChangeHandler('ad_name')}
        />
        <NonEditableInput
          name='Dress'
          title='Select Dress'
          value={this.props.data.dressSelected.dressId}
        />
        <HorizontalList data={this.props.data}/>
        <EditableInput
          name='Message'
          title="Type message for Ad"
          value={this.state.message}
          onChange={this.onValueChangeHandler('message')}
        />
        <button
          type='button'
          className='btn'
          onClick={(evt) => this.props.onSubmit(evt, this.state)}>
          Submit
        </button>
      </div>
    )
  }
}

class EditableInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='input-group'>
        <label>{this.props.title}</label>
        <input
          type='text'
          ref={input => this.input = input}
          value={this.props.value}
          onChange={this.props.onChange.bind(this)}
          placeholder={this.props.name.toLowerCase()}
        />
      </div>
    )
  }
}

class NonEditableInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='input-group'>
        <label>{this.props.title}</label>
        <input
          type='text'
          disabled="disabled"
          ref={input => this.input = input}
          value={this.props.value}
          placeholder={this.props.name.toLowerCase()}
        />
      </div>
    )
  }
}
