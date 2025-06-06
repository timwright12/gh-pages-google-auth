import React, { useEffect } from 'react';

const CLIENT_ID = '462695588809-2ag1jbtdb2qkpfo14oj2k7v7ajf8tp53.apps.googleusercontent.com';

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = decodeURIComponent(
    atob(base64Url)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(base64);
}

export default function Home() {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('google-button'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  function handleCredentialResponse(response) {
    const user = parseJwt(response.credential);
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = '/gh-pages-google-auth/welcome';
  }

  return (
    <div className='feedback'>
      <div>
        <h1>Login with Google</h1>
        <span id="google-button"></span>
      </div>
    </div>
  );
}
