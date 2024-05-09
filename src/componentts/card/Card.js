import React from "react";
import "./style.css"; // Import your CSS file for styling

const Card = ({ post, setModal }) => {
    const date = new Date(post?.date * 1000).toLocaleDateString('en-Us', { day: 'numeric', month: 'short', year: 'numeric' });
    return (
        <div className="card">
            <div className="img-box">
                <img src={post?.thumbnail?.small} alt={post?.title} className="card-image" />
                <div className="hover-opacity">
                    <button onClick={() => setModal(post)} className="learn-more">Learn more</button>
                </div>
            </div>
            <div className="dots">
                <span className="dot blue"></span>
                <span className="dot yellow"></span>
            </div>
            <div className="card-content">
                <h2 className="card-title">{post?.title}</h2>
                <p className="card-description">{post?.content}</p>
                <div className="card-footer">
                    <p className="card-name">
                        {post?.author?.name} - {post?.author?.role}
                    </p>
                    {/* <p className="card-role">{role}</p> */}
                    <p className="card-date">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
