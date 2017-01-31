"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Cell = (function (_super) {
    __extends(Cell, _super);
    function Cell(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasMine: props.cell.hasMine,
            hasFlag: props.cell.hasFlag,
            isOpened: props.cell.isOpened,
            count: 0
        };
        return _this;
    }
    Cell.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            isOpened: nextProps.cell.isOpened,
            hasMine: nextProps.cell.hasMine,
            hasFlag: nextProps.cell.hasFlag,
            count: nextProps.cell.count
        });
    };
    Cell.prototype.open = function () {
        this.props.open(this.props.cell);
    };
    Cell.prototype.mark = function (e) {
        e.preventDefault();
        if (!this.state.isOpened) {
            this.props.mark(this.props.cell);
        }
    };
    Cell.prototype.render = function () {
        var self = this;
        var cell = function () {
            if (self.state.isOpened) {
                if (self.state.hasMine) {
                    return (React.createElement("div", { className: "Cell__cover Cell__cover--opened" },
                        React.createElement("span", { className: "Cell__bomb" }, "b")));
                }
                else {
                    return (React.createElement("div", { className: "Cell__cover Cell__cover--opened" },
                        React.createElement("span", { className: "Cell__number" + self.state.count }, self.state.count)));
                }
            }
            else if (self.state.hasFlag) {
                return (React.createElement("div", { className: "Cell__cover Cell__cover--opened" },
                    React.createElement("span", { className: "Cell__flag" }, "f")));
            }
            else {
                return (React.createElement("div", { className: "Cell__cover" }));
            }
        }();
        return (React.createElement("td", { className: "Cell", onClick: this.open.bind(this), onContextMenu: this.mark.bind(this) }, cell));
    };
    return Cell;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cell;
//# sourceMappingURL=Cell.js.map