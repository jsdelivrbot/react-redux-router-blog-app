import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {

    /**
     * After the component mount
     */
    componentDidMount() {

        this.props.fetchPosts();

    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{ post.id }</Link> | {post.title}
                </li>
            )
        });
    }

    render() {

        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-gorup">
                    { this.renderPosts()}
                </ul>
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);