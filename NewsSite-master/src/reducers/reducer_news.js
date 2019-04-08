//Author Ram Date: 01/03/2019
//Action for responding back the payload to components after user search
export default function(state=[], action){
    switch (action.type) {
      case 'REDUCER_NEWS':
      return action.payload.data;
    }
    return state;
    }
    