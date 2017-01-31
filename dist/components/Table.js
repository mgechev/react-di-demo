"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Row_1 = require("./Row");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rows: _this.createTable(props)
        };
        return _this;
    }
    Table.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.openNum > nextProps.openNum || this.props.colNum !== nextProps.colNum) {
            this.setState({
                rows: this.createTable(nextProps)
            });
        }
    };
    Table.prototype.createTable = function (props) {
        var mineTable = [];
        for (var row = 0; row < props.rowNum; row++) {
            mineTable.push([]);
            for (var col = 0; col < props.colNum; col++) {
                mineTable[row].push({
                    x: col,
                    y: row,
                    count: 0,
                    isOpened: false,
                    hasMine: false,
                    hasFlag: false
                });
            }
        }
        for (var i = 0; i < props.mineNum; i++) {
            var cell = mineTable[Math.floor(Math.random() * props.rowNum)][Math.floor(Math.random() * props.colNum)];
            if (cell.hasMine) {
                i--;
            }
            else {
                cell.hasMine = true;
            }
        }
        return mineTable;
    };
    Table.prototype.open = function (cell) {
        var num = this.countMines(cell);
        var _rows = this.state.rows;
        if (!_rows[cell.y][cell.x].isOpened) {
            this.props.addOpenNum();
        }
        _rows[cell.y][cell.x].isOpened = true;
        _rows[cell.y][cell.x].count = cell.hasMine ? "b" : num;
        this.setState({ rows: _rows });
        if (_rows[cell.y][cell.x].hasFlag) {
            _rows[cell.y][cell.x].hasFlag = false;
            this.props.checkFlagNum(-1);
        }
        if (!cell.hasMine && num === 0) {
            this.openAround(cell);
        }
        if (cell.hasMine) {
            this.props.gameOver();
        }
    };
    Table.prototype.mark = function (cell) {
        var _rows = this.state.rows;
        var _cell = _rows[cell.y][cell.x];
        _cell.hasFlag = !_cell.hasFlag;
        this.setState({ rows: _rows });
        this.props.checkFlagNum(_cell.hasFlag ? 1 : -1);
    };
    Table.prototype.countMines = function (cell) {
        var aroundMinesNum = 0;
        for (var row = -1; row <= 1; row++) {
            for (var col = -1; col <= 1; col++) {
                if (cell.y - 0 + row >= 0 && cell.x - 0 + col >= 0 && cell.y - 0 + row < this.state.rows.length && cell.x - 0 + col < this.state.rows[0].length && this.state.rows[cell.y - 0 + row][cell.x - 0 + col].hasMine && !(row === 0 && col === 0)) {
                    aroundMinesNum++;
                }
            }
        }
        return aroundMinesNum;
    };
    Table.prototype.openAround = function (cell) {
        var _rows = this.state.rows;
        for (var row = -1; row <= 1; row++) {
            for (var col = -1; col <= 1; col++) {
                if (cell.y - 0 + row >= 0 && cell.x - 0 + col >= 0 && cell.y - 0 + row < this.state.rows.length && cell.x - 0 + col < this.state.rows[0].length && !this.state.rows[cell.y - 0 + row][cell.x - 0 + col].hasMine && !this.state.rows[cell.y - 0 + row][cell.x - 0 + col].isOpened) {
                    this.open(_rows[cell.y - 0 + row][cell.x - 0 + col]);
                }
            }
        }
    };
    Table.prototype.render = function () {
        var _this = this;
        var Rows = this.state.rows.map(function (row, index) {
            return (React.createElement(Row_1.default, { cells: row, open: _this.open.bind(_this), mark: _this.mark.bind(_this) }));
        });
        return (React.createElement("table", { className: "Table" },
            React.createElement("tbody", null, Rows)));
    };
    return Table;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Table;
//# sourceMappingURL=Table.js.map