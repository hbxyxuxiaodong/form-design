import React, { PureComponent } from "react";
import WrapperDrop from "../DragAndDrop/WrapperDrop.js";
import WrapperDrag from "../DragAndDrop/WrapperDrag.js";

class RadioBox extends PureComponent {
  render() {
    const { dataSet, isDragging, activeField, removeField } = this.props;
    const {
      attrInfo: { titleValue, tipValue, verifyValue, row, col },
      active
    } = dataSet;

    let status = "";
    if (active) {
      status = status + " active";
    }
    if (isDragging) {
      status = status + " draging";
    }
    return (
      <div className={`wf-component wf-component-textfield ${status}`}>
        <div
          className="wf-remove icon icon-close"
          onMouseDown={event => {
            event.stopPropagation();
            removeField(dataSet, row, col);
          }}
        />
        <div
          className="wf-overlay wf-drag"
          onMouseDown={event => {
            event.stopPropagation();
            activeField(dataSet, active, row, col);
          }}
        />
        <div className="wf-view">
          <div className="wf-field">
            <label className="wf-field-label">{titleValue}</label>
            <span className="wf-field-placeholder">
              {tipValue + (verifyValue ? "（必填）" : "")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default WrapperDrop(WrapperDrag(RadioBox));
