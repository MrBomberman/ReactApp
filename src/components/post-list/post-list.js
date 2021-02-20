import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item; //  вытаскаиваем сначала id, а потом уже все остальное

        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    });

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;