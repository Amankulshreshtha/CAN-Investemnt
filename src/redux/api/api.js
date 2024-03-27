// import axios from 'axios';
// import {useSelector} from 'react-redux';

// const BASE_URL = 'http://54.190.192.105:9185/angel';

// export const fetchMandateList = async token => {
//     try {
//       const response = await fetch(`${BASE_URL}${API_ENDPOINTS.HOME}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: token,
//         },
//       });
//       const data = await response.json();
//       console.log('Mandate List API Response:', data);
//       if (response.ok) {
//         return data;
//       } else {
//         throw new Error(data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching mandate list:', error);
//       throw new Error('Failed to fetch mandate list: ' + error.message);
//     }
//   };
