import React, {
  useState,
  useEffect,
} from 'react';
import _ from 'lodash';
import axios from 'axios';
import to from 'await-to-js';

const OPEN_AI_API_KEY = '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';

const App = () => {
  const [result, setResult] = useState('');
  const [inputValue, setInputValue] = useState('');

  const client = axios.create({
    headers: {
      Authorization: 'Bearer ' + OPEN_AI_API_KEY,
    }
  });

  const fetchData = async (prompt) => {
    const params = {
      prompt,
      model: "text-davinci-003",
      max_tokens: 10,
      temperature: 0,
    };

    const [err, data] = await to(client.post(
      'https://api.openai.com/v1/completions',
      params,
    ));

    if (err) {
      console.warn('出错了!', err.message);
    }

    console.log(data, '<=== result');
    setResult(_.get(data, 'data.choices[0].text', ''));
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  const handleSearch = () => {
    fetchData(inputValue);
  }

  return (
    <div className='test'>
      <input onChange={handleInputChange} />
      <button style={{ marginLeft: 10 }} onClick={handleSearch}>发送</button>
      <p>{result}</p>
    </div>
  )
};

export default App;
