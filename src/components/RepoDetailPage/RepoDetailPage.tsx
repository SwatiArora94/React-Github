import React from "react";
import './RepoDetailPage.scss';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import { getRepoFromRepoList } from "services/repos/selectors";


export const RepoDetailPage = () => {

    const params = useParams();
    const { id } = params;
    const repoId = id === undefined || Number.isNaN(id) ? undefined : +id;
    const repo = useSelector((state: RootState) => getRepoFromRepoList(state, repoId)); 
    const { name,
        description, 
        watchers_count,
        forks_count,
        clone_url,
        open_issues_count, html_url } = repo || {};

    return (<div className="repo-detail" >
        <div className="repo-detail-cont">
            <div className="repo-detail-title-cont">
                <span className="repo-detail-title">{name}</span>
            </div>
            <div className="repo-detail-preview-cont">
                <span className="repo-detail-preview">{description}</span>
            </div>
            <div className="repo-url-cont">
                <a href={html_url} target="_blank" rel="noreferrer">
                {html_url}</a> 
            </div>
            <div className="repo-sub-detail-cont">
                <span className="repo-sub-detail">Watchers: {watchers_count}</span>
                <span className="repo-sub-detail">Forks: {forks_count}</span>
                <span className="repo-sub-detail">Open Issues: {open_issues_count}</span>
            </div>
            <div className="repo-clone-url">
                <span>Clone this: {clone_url}</span>
            </div>
        </div>
    </div>)
};

export default RepoDetailPage;
