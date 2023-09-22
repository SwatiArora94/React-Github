import React from "react";
import './RepoTile.scss';
import { Props } from "./types";
import { useNavigate } from "react-router-dom";

export const RepoTile: React.FC<Props> = ({ repo }) => {

    const {id, name, description} = repo;
    const navigate = useNavigate();

    const onRepoClick = () => {
        navigate(`/repo/${id}`);
    }

    return <div className="repo-tile" onClick={onRepoClick}>
            <div className="repo-title-cont">
                <span className="repo-title">{name}</span>
            </div>
            <div className="repo-preview-cont">
                <span className="repo-preview">{description}</span>
            </div>
    </div>
}

export default RepoTile;
