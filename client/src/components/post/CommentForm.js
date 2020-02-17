import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../../actions/post';
const CommentForm = ({ addComment, deleteComment, postId }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        console.log(text);
        addComment(postId, { text });
        setText('');
    };
    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Leave A Comment</h3>
            </div>
            <form className="form my-1" onSubmit={e => onSubmit(e)}>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Comment on this post"
                    required
                    onChange={e => {
                        setText(e.target.value);
                    }}
                ></textarea>
                <input
                    type="submit"
                    className="btn btn-dark my-1"
                    value="Submit"
                />
            </form>
        </div>
    );
};

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    addComment,
    deleteComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
