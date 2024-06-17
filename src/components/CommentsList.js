import {useState} from 'react';

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);

    return (
        <div>
            {comments.map((comment) => (
                <div><p key={comment.id}>{comment.text}</p>
                <button onClick={() => {
                    setComments(comments.filter((c) => c.id !== comment.id));
                }}>Delete</button></div>
            ))}
            
        </div>
    );
}

export default CommentsList;