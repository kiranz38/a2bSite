
//For responding back the payload when article get selected
export default function(state=null, action){
    switch (action.type) {
      case 'ARTICLE_SELECTED':
      return action.payload;
    }
    return state;
    }
    