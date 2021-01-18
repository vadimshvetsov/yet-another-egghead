import React from "react"
import dracula from "prism-react-renderer/themes/dracula"

import Highlight, { defaultProps } from "prism-react-renderer"
export default ({ children }) => {
  const className = children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
