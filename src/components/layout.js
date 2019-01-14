import React from 'react';

import MDXRenderer from "gatsby-mdx/mdx-renderer";

import TabGroup from './TabGroup.js';

const Layout = ({ children, scope }) => (
	<div>
		In Layout.js
  	{children}
  </div>
)

export default Layout;
