import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../css/main.module.css';

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div className={`${styles['mt-5']}`}>
      <h2>{contact.title}</h2>
      <table>
        <tbody>
          {contact.content[0].value.map((item, index) => (
            <tr key={index}>
              <th>{item.label}</th>
              <td>
                {item.label === '지원방법' ? (
                  <div dangerouslySetInnerHTML={{ __html: item.text }} />
                ) : (
                  item.text
                    .split('\n')
                    .map((line, lineIndex) => <div key={lineIndex}>{line}</div>)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetail;
