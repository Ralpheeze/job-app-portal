import React from 'react';

const roles = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'];

const RoleSelector = ({ setRole }) => { //{setRole} is an object because its in a curly bracket and since its used in the arrow function that way to be called somewhere else, it is called a prop.
  return (
    <div>
      <h2>Select a Role to Apply For:</h2>


      {/* MAPPING THROUGH ROLES */}
      {/* For each role in the roles array, create a button */}
      {/* {roles.map((r) => ())} */}
      {roles.map((role) => (
        <button
          key={role} // Unique key required when mapping elements in React
          onClick={() => setRole(role)} // When button is clicked, setRole is called with the selected role
          style={{ margin: '10px' }} // Adds spacing between buttons
        >
          {role} {/* Display the role name inside the button */}
        </button>
      ))}
    </div>
  );
};

export default RoleSelector;



//EXPLAINS THE CONCEPT OF MAPPING USING VIDEOS
// import React from 'react';
// import './roleSelector.css';

// // const roles = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'];
// const videos = [{id: 1, title: 'Barca vs RM', image: "../src/assets/images/", video_content: "", secondaryTitle: "edjiwjken", text1: "Lorem ipsum dolor sit amet"},
// {id: 2, title: 'Barca vs RM', image: "", video_content: "", secondaryTitle: "edjiwjken", text1: "Lorem ipsum dolor sit amet"}, 
// {id: 3, title: 'Barca vs Mallorca', image: "", video_content: "", secondaryTitle: "edjiwjken", text1: "Lorem ipsum dolor sit amet"}, 
// {id: 4, title: 'MarkANgel Comedy', image: "", video_content: "", secondaryTitle: "edjiwjken", text1: "Lorem ipsum dolor sit amet"}, 
// {id: 5, title: 'Barca vs RM', image: "", video_content: "", secondaryTitle: "edjiwjken", text1: "Lorem ipsum dolor sit amet"}, 
// {id: 6, title: 'Barca vs RM', image: "", video_content: "", secondaryTitle: "edjiwjken", text1: "Lorem ipsum dolor sit amet"},
// ]

// const RoleSelector = ({ setRole }) => {
//   return (
//     <div>
//       <h2>Select a Role to Apply For:</h2>

//       {/* MAPPING */}
//       {/* {videos.map((video) => ())} */}
//       {videos.map((video) => (
//         <div className='youtube-video'>
//           <div className="video-control">
//             <video src={video.video_content} alt="" />
//           </div>  

//           <div className="desc-control">
//               <div className="profile-guard">
//                 <img src={video.image} alt="" />
//                 <h3 className="">{video.title}</h3>
//               </div>
//               <div className="para-guard">
//                 <p>{video.text}</p>
//                 <p>Lorem ipsum dolor sit amet.</p>
//               </div>
//           </div>
//         </div>
        
//       ))}

//     </div>
//   );
// };

// export default RoleSelector;
