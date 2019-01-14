import React from 'react';

import MDXRenderer from "gatsby-mdx/mdx-renderer";

import TabGroup from '../components/TabGroup.js';

const TestTemplate = ({ data, scope }) => (
	<div>
  	<MDXRenderer scope={{ TabGroup, ...scope }}>{data.mdx.code.body}</MDXRenderer>
  </div>
)

export default TestTemplate;


export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt
			fields {
				slug
			}
			code {
				body
			}
    }
  }
`