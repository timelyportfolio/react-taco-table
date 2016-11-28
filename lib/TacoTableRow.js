'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TacoTableCell = require('./TacoTableCell');

var _TacoTableCell2 = _interopRequireDefault(_TacoTableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  columns: _react2.default.PropTypes.array.isRequired,
  columnGroups: _react2.default.PropTypes.array,
  columnSummaries: _react2.default.PropTypes.array,
  className: _react2.default.PropTypes.string,
  highlighted: _react2.default.PropTypes.bool,
  highlightedColumnId: _react2.default.PropTypes.string,
  isBottomData: _react2.default.PropTypes.bool,
  onClick: _react2.default.PropTypes.func,
  onColumnHighlight: _react2.default.PropTypes.func,
  onDoubleClick: _react2.default.PropTypes.func,
  onHighlight: _react2.default.PropTypes.func,
  plugins: _react2.default.PropTypes.array,
  rowData: _react2.default.PropTypes.object.isRequired,
  rowNumber: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
  tableData: _react2.default.PropTypes.array,
  CellComponent: _react2.default.PropTypes.func
};

var defaultProps = {
  columnSummaries: [],
  CellComponent: _TacoTableCell2.default
};

/**
 * React component for rendering table rows, uses `<tr>`.
 *
 * @prop {Object[]} columns  The column definitions
 * @prop {Object[]} columnGroups  How to group columns - an array of
 *   `{ header:String, columns:[colId1, colId2, ...], className:String}`
 * @prop {Object[]} columnSummaries  An array of summaries, one for each column, matched by index
 * @prop {String} className  The class name for the row
 * @prop {Boolean} highlighted Whether this row is highlighted or not
 * @prop {String} highlightedColumnId   The ID of the highlighted column
 * @prop {Boolean} isBottomData  Whether this row is in the bottom data area or not
 * @prop {Function} onClick  callback for when a row is clicked
 * @prop {Function} onColumnHighlight  callback for when a column is highlighted / unhighlighted
 * @prop {Function} onDoubleClick  callback for when a row is double clicked
 * @prop {Function} onHighlight  callback for when a row is highlighted / unhighlighted
 * @prop {Object[]} plugins  Collection of plugins to run to compute cell style,
 *    cell class name, column summaries
 * @prop {Object} rowData  The data to render in this row
 * @prop {Number} rowNumber  The row number in the table (bottom-${i} for bottom data)
 * @prop {Object[]} tableData  The table data
 * @prop {Function} CellComponent  Allow configuration of what component to use to render cells
 * @extends React.Component
 */

var TacoTableRow = function (_React$PureComponent) {
  _inherits(TacoTableRow, _React$PureComponent);

  /**
   * @param {Object} props React props
   */
  function TacoTableRow(props) {
    _classCallCheck(this, TacoTableRow);

    var _this = _possibleConstructorReturn(this, (TacoTableRow.__proto__ || Object.getPrototypeOf(TacoTableRow)).call(this, props));

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  /**
   * Handler for when the mouse enters the `<tr>`. Calls `onHighlight(rowData)`.
   * @private
   */


  _createClass(TacoTableRow, [{
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      var _props = this.props,
          onHighlight = _props.onHighlight,
          rowData = _props.rowData;

      onHighlight(rowData);
    }

    /**
     * Handler for when the mouse enters the `<tr>`. Calls `onHighlight(null)`.
     * @private
     */

  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      var onHighlight = this.props.onHighlight;

      onHighlight(null);
    }

    /**
     * Handler for when a row is clicked. Calls `onClick(rowData, rowNumber, isBottomData)`.
     * @private
     */

  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props2 = this.props,
          onClick = _props2.onClick,
          rowData = _props2.rowData,
          rowNumber = _props2.rowNumber,
          isBottomData = _props2.isBottomData;

      onClick(rowData, rowNumber, isBottomData);
    }

    /**
     * Handler for when a row is double clicked. Calls `onDoubleClick(rowData, rowNumber, isBottomData)`.
     * @private
     */

  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick() {
      var _props3 = this.props,
          onDoubleClick = _props3.onDoubleClick,
          rowData = _props3.rowData,
          rowNumber = _props3.rowNumber,
          isBottomData = _props3.isBottomData;

      onDoubleClick(rowData, rowNumber, isBottomData);
    }

    /**
     * Main render method
     * @return {React.Component}
     */

  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          className = _props4.className,
          columnSummaries = _props4.columnSummaries,
          columns = _props4.columns,
          rowData = _props4.rowData,
          rowNumber = _props4.rowNumber,
          tableData = _props4.tableData,
          CellComponent = _props4.CellComponent,
          plugins = _props4.plugins,
          onHighlight = _props4.onHighlight,
          onClick = _props4.onClick,
          onColumnHighlight = _props4.onColumnHighlight,
          onDoubleClick = _props4.onDoubleClick,
          highlighted = _props4.highlighted,
          highlightedColumnId = _props4.highlightedColumnId,
          columnGroups = _props4.columnGroups,
          isBottomData = _props4.isBottomData;

      // attach mouse listeners for highlighting

      var onMouseEnter = void 0;
      var onMouseLeave = void 0;
      if (onHighlight) {
        onMouseEnter = this.handleMouseEnter;
        onMouseLeave = this.handleMouseLeave;
      }

      // attach click handler
      var onClickHandler = void 0;
      if (onClick) {
        onClickHandler = this.handleClick;
      }

      // attach double click handler
      var onDoubleClickHandler = void 0;
      if (onDoubleClick) {
        onDoubleClickHandler = this.handleDoubleClick;
      }

      return _react2.default.createElement(
        'tr',
        {
          className: (0, _classnames2.default)(className, { 'row-highlight': highlighted }),
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          onClick: onClickHandler,
          onDoubleClick: onDoubleClickHandler
        },
        columns.map(function (column, i) {
          // find the associated column group if configured
          var columnGroup = void 0;
          if (columnGroups) {
            columnGroup = columnGroups.find(function (group) {
              return group.columns.includes(column.id);
            });
          }

          return _react2.default.createElement(CellComponent, {
            key: i,
            column: column,
            columnGroup: columnGroup,
            columnSummary: columnSummaries[i],
            columns: columns,
            plugins: plugins,
            rowNumber: rowNumber,
            rowData: rowData,
            tableData: tableData,
            onHighlight: onColumnHighlight,
            highlightedColumn: column.id === highlightedColumnId,
            highlightedRow: highlighted,
            isBottomData: isBottomData
          });
        })
      );
    }
  }]);

  return TacoTableRow;
}(_react2.default.PureComponent);

TacoTableRow.propTypes = propTypes;
TacoTableRow.defaultProps = defaultProps;

exports.default = TacoTableRow;