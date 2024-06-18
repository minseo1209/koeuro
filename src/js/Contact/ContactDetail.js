import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ContactDetail() {
  const { id } = useParams();
  const location = useLocation();
  const contact = location.state?.contact;
  if (!contact || !contact.content) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="main"></div>
      <h2 className="AboutBrandStory" style={{ marginBottom: '1em' }}>
        {contact.title}
      </h2>
      <div>
        {contact.content.map((item, index) => {
          if (item.type === 'text') {
            return <p key={index}>{item.value}</p>;
          } else if (item.type === 'image') {
            return (
              <div key={index}>
                <img
                  src={item.value}
                  alt={item.alt}
                  style={{ width: '50%', margin: '20px 0' }}
                />
              </div>
            );
          } else if (item.type === 'map') {
            return (
              <div
                key={index}
                style={{
                  width: '100%',
                  height: '400px',
                  margin: '20px 0',
                  overflow: 'hidden',
                }}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ContactDetail;