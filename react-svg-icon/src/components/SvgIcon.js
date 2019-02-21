import React, { Component } from 'react';
import '../assets/style/svgIcon.css';

// 引入所有的svg的文件
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../assets/svgs', false, /\.svg$/);
requireAll(req);

class SvgIcon extends Component {
  render() {
    const iconName = `#icon-${this.props.iconClass}`;
    return (
      <svg className="svg-icon" aria-hidden="true">
        <use xlinkHref={ iconName }></use>
      </svg>
    )
  }
}

export default SvgIcon;