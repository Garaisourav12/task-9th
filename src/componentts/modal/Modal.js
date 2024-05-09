import React from "react";
import "./style.css";
import { VscClose } from "react-icons/vsc";

function Modal({ setModal, modal:post }) {
    // showing fallback image
    const avatar = post?.author?.avatar ? post?.author?.avatar :  "https://avatar.iran.liara.run/public";
    return (
        <div className="modal">
            <div className="modal-opacity">
                <div className="modal-container">
                    <div className="modal-header">
                        <VscClose onClick={() => setModal(null)} />
                    </div>
                    <div className="modal-img-box">
                        <img
                            src={post?.thumbnail?.small}
                            alt=""
                        />
                    </div>
                    <div className="modal-body">
                        <h4 className="modal-title">{post?.title}</h4>
                        <p className="modal-content">
                            {post?.content}
                        </p>
                    </div>
                    <div className="modal-footer">
                        <div className="avatar">
                            <img
                                src={avatar}
                                alt=""
                            />
                        </div>
                        <p className="modal-author">
                            {post?.author?.name} - {post?.author?.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
