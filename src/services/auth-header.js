
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.user.token) {
    console.log('Checking token validation', user.user.token)
    return { 
      'Content-Type': 'application/json',
      'Authorization': `Token ${user.user.token}`,
    };
  } else {
    return {};
  }
}