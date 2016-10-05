import React, {Component} from 'react'
import MarkdownIt from 'markdown-it'
import Radium from 'radium'

import styles from '../../styles'

const md = new MarkdownIt()


class BlogPost extends Component {
  render() {
    const pubDate = new Date(Date.parse(this.props.publicationDate))
    const content = md.render(this.props.content)
    return (
      <div
        style={styles.blogPost}
      >
        <h4>{this.props.title}</h4>
        <h5>{pubDate.toLocaleDateString()}</h5>
        <br/>
        <div dangerouslySetInnerHTML={{__html: content}}/>
      </div>
    )
  }
}

BlogPost = Radium(BlogPost)
export default BlogPost
