
import React, { useState, useEffect } from 'react';
import './LayOut.css';
import Group from './Group.png';

const LayOut = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api9.parentune.com/content/v2/dailyfocus', {
      method: 'GET',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'authtoken': '9467c5b4e290227a2a270f4a1ec2a37643b4a5dfd90a993b4e6ceb61ea0d5b5a',
        'instanceid': 'c4b50b993092ab3ed5f35ad684f82b4e6d081a4ed65c49902d80dde82183057a',
        'lang': 'en',
        'origin': 'https://www.parentune.com',
        'priority': 'u=1, i',
        'referer': 'https://www.parentune.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
        'userid': '3781928'
      }
    })
      .then(response => response.json())
      .then(data => setData(data.data.content))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ width: '420px', backgroundColor: 'white', margin: 'auto' }}>
      <nav>
        <div className='menu'> 
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img src={Group} alt="Parentune logo" />
        </div>
        <div>
          <span style={{fontSize :'30px'}}>🔎</span>
          <span style={{fontSize :'30px'}}>🔔</span>
        </div>
      </nav>
      <div className='container'>
        {data && data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            {item.data && item.data.map((subItem, subIndex) => (
              <div key={subIndex} className='card'>

                <input type="checkbox" id={`checkbox-${index}-${subIndex}`} className='checkbox' />
                <label htmlFor={`checkbox-${index}-${subIndex}`}>

                  <img src='https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg' alt='Cute baby' />
                  <div>
                    <h3>{subItem.title}</h3>
                    <p>{subItem.description}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayOut;
