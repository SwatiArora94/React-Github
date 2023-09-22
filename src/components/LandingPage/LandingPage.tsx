import React from "react";
import './LandingPage.scss';
import RepoTile from "components/RepoTile/RepoTile";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const LandingPage = () => {

    const repos = useSelector((state: RootState) => state.repos.repos); 
    const reposView = repos.map(repo => <RepoTile key={repo.id} repo={repo} />)

    return <div className="landing-page">
        <span className="landing-page-title">Repos We Have</span>
        <div className="repos-view">
            {reposView}
        </div>
    </div>
}

export default LandingPage;
