import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setResultAccuracy } from '../services/resultAccuracy'
import { ICalcResultProps } from '../interfaces/ICalcResult'

export class CalcResult extends Component<ICalcResultProps> {
    public render() {
        const { signs, result } = this.props;
        return (
            <div id="calcResult">
                <div className="operation">{signs}</div>
                <div className="result-before">{setResultAccuracy(result)}</div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    signs: state.signs.signs,
    result: state.signs.result
})

export default connect(mapStateToProps)(CalcResult);