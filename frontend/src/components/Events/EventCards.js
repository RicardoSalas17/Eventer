import React from "react";
// import { Link } from "react-router-dom";


function ProjectCards({ events }) {
  
  return (
    <>
      {events.map(({ 
        eventName, 
        dateTime,
        localTime,
       description,
       owner,
       comments,
       _id }
       ) => (
        <article key={_id}>
          <h2>eventName:{eventName}</h2>
          <p>eventdate:{dateTime}</p>
          <p>eventtime:{localTime}</p>
          <p>eventdescription:{description}</p>
            <small>EventOwner: {owner.name}</small>

            <h2>Comments</h2>
            {comments.map(({
              content:commentcontent,
              subComments,
              owner:names,
              _id,
              })=>(
                <article key={_id}>
                <h3>CommentOwner:{names.name}</h3>
                <p>CommentContent:{commentcontent}</p>
                {subComments.map(({
                  content:subcommentcontent,
                  owner:ownersname,
                  _id,
                  })=>(
                    <article key={_id}>
                    <h6>subCommentOwner:{ownersname.name}</h6>
                    <h6>subCommentContent:{subcommentcontent}</h6>
                    
                    </article>
                  ))}
                </article>
              ))}

        </article>
        ))}
    </>
  );
}

export default ProjectCards;
