import React, { useState, useEffect } from 'react';
import SimilarityMap from './components/SimilarityMap';
import './ResultsPage.css';

// Icons
const ProfileIcon = () => <svg className="icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const LocationIcon = () => <svg className="icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;
const WorkIcon = () => <svg className="icon" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>;
const SkillsIcon = () => <svg className="icon" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>;

const ResultsPage = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData || !userData.formerExperience) {
          throw new Error('No user experience data found');
        }

        const response = await fetch("http://localhost:5000/similarity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            user_experience: userData.formerExperience,
            preferred_job: userData.preferredJob
          }),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch results");
        }
        
        const data = await response.json();
        const similarityScores = data.top_matches.map(match => ({
          state: match.state,
          score: match.score
        }));
        
        setResults({
          ...data,
          similarity_scores: similarityScores,
          userData
        });
      } catch (error) {
        console.error("Error fetching results:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!results) return <div className="no-results">No results found</div>;

  return (
    <div className="results-container">
      <header className="results-header">
        <h1>Job Match Results</h1>
        <p className="subtitle">Based on your profile and experience</p>
      </header>

      <div className="user-profile">
        <h2>Your Profile</h2>
        <div className="profile-grid">
          <div className="profile-card">
            <div className="card-icon"><ProfileIcon /></div>
            <div className="card-content">
              <h3>Personal Info</h3>
              <div className="card-text">
                <div className="text-item">
                  <span className="label">Name</span>
                  <span className="value">{results.userData.name}</span>
                </div>
                <div className="text-item">
                  <span className="label">Country</span>
                  <span className="value">{results.userData.country}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-icon"><WorkIcon /></div>
            <div className="card-content">
              <h3>Career Preferences</h3>
              <div className="card-text">
                <div className="text-item">
                  <span className="value">{results.userData.preferredJob}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="card-icon"><SkillsIcon /></div>
            <div className="card-content">
              <h3>Experience</h3>
              <div className="card-text">
                <div className="text-item">
                  <span className="value">{results.userData.formerExperience.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="results-content">
        <div className="map-section">
          <h2>State-wise Job Match Distribution</h2>
          <div className="map-container">
            <SimilarityMap 
              similarityScores={results.similarity_scores}
              onStateHover={setHoveredState}
            />
            {hoveredState && (
              <div className="map-tooltip">
                <h3>{hoveredState.name}</h3>
                <p>Match Score: {(hoveredState.score * 100).toFixed(1)}%</p>
              </div>
            )}
          </div>
        </div>

        <div className="matches-section">
          <h2>Top Job Matches</h2>
          <div className="matches-container">
            {results.top_matches.map((match, index) => (
              <div key={index} className="match-card">
                <div className="match-header">
                  <span className="job-title">{match.job}</span>
                  <span className="state">
                    <LocationIcon />
                    {match.state}
                  </span>
                </div>
                <div className="match-score">
                  <div className="score-bar">
                    <div 
                      className="score-fill" 
                      style={{ width: `${match.score * 100}%` }}
                    />
                  </div>
                  <span className="score-value">{(match.score * 100).toFixed(1)}% Match</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;