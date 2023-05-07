import React, { useState, useEffect } from 'react';

// const MorphStatus = (props) => {
//   const [morphState, setMorphState] = useState(null);

//   useEffect(() => {
//     fetchMorphStatus();
//   }, []);

//   const fetchMorphStatus = async () => {
//     const morphId = props.match.params.morphId;
//     const response = await fetch(`https://pyaar.ai/morph_status/${morphId}`);
//     const data = await response.json();
//     setMorphState(data.state);
//   };

//   const renderMorphStatus = () => {
//     if (!morphState) {
//       return <p>Loading...</p>;
//     }

//     switch (morphState) {
//       case 'pending':
//         return <p>Your morph request is pending.</p>;
//       case 'processing':
//         return <p>Your morph is currently being processed.</p>;
//       case 'successful':
//         return (
//           <div>
//             <p>Your morph is ready!</p>
//             <img src={`https://pyaar.ai/morph_gifs/${props.match.params.morphId}.gif`} alt="Morphed GIF" />
//           </div>
//         );
//       case 'failed':
//         return <p>Unfortunately, your morph request has failed. Please try again.</p>;
//       default:
//         return <p>Unknown morph status. Please refresh the page or try again later.</p>;
//     }
//   };

//   return (
//     <div>
//       <h1>Morph Status</h1>
//       {renderMorphStatus()}
//     </div>
//   );
// };

// export default MorphStatus;
