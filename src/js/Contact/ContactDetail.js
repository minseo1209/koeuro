import React from 'react';
import { useLocation } from 'react-router-dom';

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div className="container mt-5">
      <h2>{contact.title}</h2>
      <table>
        <tbody>
          {contact.content[0].value.map((item, index) => (
            <tr key={index}>
              <th>{item.label}</th>
              <td>
                {item.text.split('\n').map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetail;
