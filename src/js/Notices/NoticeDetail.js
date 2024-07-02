import React from 'react';
import { useLocation } from 'react-router-dom';
import about from '../../css/about.module.css';
import styles from '../../css/main.module.css';
import NoticesCss from '../../css/Notices.module.css';

function NoticeDetail() {
  const location = useLocation();
  const notice = location.state.notice;

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <div className={`${styles['mt-5']}`}>
      <div className={about.main}>&nbsp;</div>
      <h2
        className={NoticesCss.AboutBrandStory}
        style={{ marginBottom: '1em' }}
      >
        {notice.title}
      </h2>
      <div>
        {notice.content.map((item, index) => {
          if (item.type === 'text') {
            return (
              <p className={NoticesCss.subtitle} key={index}>
                {item.value}
              </p>
            );
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
                  width: '80%',
                  marginLeft: '10%',
                  textAlign: 'center',
                  height: '400px',
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

export default NoticeDetail;
