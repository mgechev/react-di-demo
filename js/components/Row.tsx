import * as React from 'react';
import Cell from './Cell';
import {Inject} from 'injection-js';
import {ProviderConfig} from '../providers';
import {WebSocketService} from '../websocket.service';

@ProviderConfig([ WebSocketService ])
export default class Row extends React.Component<any, any> {
  constructor(@Inject('props') props, ws: WebSocketService, @Inject('update') update) {
    super(props);
    console.log(props, update);
    this.state = {
      cells : props.cells
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      cells : nextProps.cells
    });
  }
  
  render(){
    var Cells = this.state.cells.map((cell, index) => {
      return(
        <Cell cell={cell} open={this.props.open} mark={this.props.mark} />
      );
    });
    return (
      <tr>
        {Cells}
      </tr>
    );
  }
}

