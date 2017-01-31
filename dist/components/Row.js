"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Cell_1 = require("./Cell");
var Row = (function (_super) {
    __extends(Row, _super);
    function Row(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            cells: props.cells
        };
        return _this;
    }
    Row.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            cells: nextProps.cells
        });
    };
    Row.prototype.render = function () {
        var _this = this;
        var Cells = this.state.cells.map(function (cell, index) {
            return (React.createElement(Cell_1.default, { cell: cell, open: _this.props.open, mark: _this.props.mark }));
        });
        return (React.createElement("tr", null, Cells));
    };
    return Row;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Row;
//# sourceMappingURL=Row.js.map