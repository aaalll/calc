import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewNum, addNewSign, clearSigns, clearLast } from '../actions/signs'
import { btnEqualClick, numberClick } from '../services/btnClick'
import { IButtonsProps } from '../interfaces/IButton'

export class Buttons extends Component<IButtonsProps> {
  public render() {
    const { onClearSigns, onAddNewSign } = this.props;
    return (
      <div id="buttons">
        <div>
          <button onClick={onClearSigns}>C</button>
          <button onClick={onAddNewSign}>(</button>
          <button onClick={onAddNewSign}>)</button>
          <button onClick={onAddNewSign}>*</button>
        </div>
        <div>
          <button onClick={numberClick}>7</button>
          <button onClick={numberClick}>8</button>
          <button onClick={numberClick}>9</button>
          <button onClick={onAddNewSign}>-</button>
        </div>
        <div>
          <button onClick={numberClick}>4</button>
          <button onClick={numberClick}>5</button>
          <button onClick={numberClick}>6</button>
          <button onClick={onAddNewSign}>+</button>
        </div>
        <div>
          <button onClick={numberClick}>1</button>
          <button onClick={numberClick}>2</button>
          <button onClick={numberClick}>3</button>
          <button onClick={onAddNewSign}>/</button>
        </div>
        <div>
          <button onClick={onAddNewSign}>.</button>
          <button onClick={numberClick}>0</button>
          <button onClick={onAddNewSign}>^</button>
          <button onClick={btnEqualClick}>=</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = ({
  onAddNewNum: addNewNum,
  onAddNewSign: addNewSign,
  onClearSigns: clearSigns,
  onClearLast: clearLast
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);