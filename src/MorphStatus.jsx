import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import yinyang from './yin-yang-small.png';
import './App.css';

const domain = window.location.hostname;
// const domain = 'dev.pyaar.ai';

const morph_status_endpoint = 'https://' + domain + '/morph/status';

const placeholderImage = yinyang;

const MorphStatus = () => {
  const [morphState, setMorphState] = useState('pending');
  const [morphUri, setMorphUri] = useState(null);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const { morphId } = useParams();

  useEffect(() => {
    const fetchMorphStatus = async () => {
      const response = await fetch(`${morph_status_endpoint}/${morphId}`);
      const data = await response.json();
  
      setMorphState(data.status);
      setMorphUri(data.morphUri);
    };
  
    fetchMorphStatus();
  }, [morphId]);

  const renderMorphStatus = () => {
    switch (morphState) {
      case 'processing':
        return (
          <div>
            <img
              src={yinyang}
              alt="Placeholder"
              className="App-logo"
            />
            <p>Your morph is currently being processed.</p>
          </div>
        );
      case 'complete':
        return (
          <div>
            <p>Your morph is complete!  Your GIF will be shown below</p>
            <img
              src={isGifLoaded ? morphUri : placeholderImage}
              alt="Morphed GIF"
              loading="lazy"
              style={{ display: isGifLoaded ? 'inline' : 'none', maxWidth: '100%' }}
              onLoad={() => setIsGifLoaded(true)}
            />
            <img
              src={yinyang}
              alt="Placeholder"
              style={{ display: isGifLoaded ? 'none' : 'inline' }}
              className="App-logo"
            />
          </div>
        );
      case 'failed':
        return <p>Unfortunately, your morph request has failed. Please try to morph different images.</p>;
      default:
        return (
          <div>
            <img
              src={yinyang}
              alt="Placeholder"
              className="App-logo"
            />
            <p>Your morph request is pending.</p>
          </div>
        );
    }
  };

  return (
    <div>
      <h1>Morph Status: {morphState}</h1>
      {renderMorphStatus()}
    </div>
  );
};

export default MorphStatus;
