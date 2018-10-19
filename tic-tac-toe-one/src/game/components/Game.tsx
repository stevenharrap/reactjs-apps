import * as React from "react";
import { connect } from 'react-redux';
import { IGameDto } from '../dtos/IGameDto';
import { Dispatch } from 'redux';

interface IPropsFromState {
    name: string;
}

interface IPropsFromDispatch {
    doClicky: (id: number) => () => void;
}

class Game extends React.Component<IPropsFromState & IPropsFromDispatch> {
    public render(): JSX.Element {
        const name = this.props.name;

        // return <div>
        //     Hello world! {name}. 
        //     <button onClick={() => this.props.store.dispatch({type: 'Clicky'})}>click it!</button>
        //     </div>;

        return <div> {name} 
        <button onClick={this.props.doClicky(1)}>click it 1!</button>
        <button onClick={this.props.doClicky(2)}>click it 2!</button>
        <button onClick={this.props.doClicky(3)}>click it 3!</button>
        <button onClick={this.props.doClicky(4)}>click it 4!</button>
        <input type="text">{name}</input>
        </div>
    }

    
}

const mapStateToProps = (state: IGameDto) : IPropsFromState => {
    return { name: state.name };    
}

const mapDispatchToProps = (dispatch: Dispatch) : IPropsFromDispatch => {
    return {
      doClicky: (id: number) => () => dispatch( {type: 'Clicky', payload: { id } }),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Game);