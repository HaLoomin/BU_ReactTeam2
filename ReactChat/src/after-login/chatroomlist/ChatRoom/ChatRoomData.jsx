const chatList = [
    {
      "no": 1,
      "name": "Room1",
    },
    {
      "no": 2,
      "name": "Room2",
    },
    {
      "no": 3,
      "name": "Room3",
    },
  ];
  
  const getPostByNo = no => {
    const array = chatList.filter(x => x.no == no);
    if (array.length == 1) {
      return array[0];
    }
    return null;
  }
  
  export {
    chatList,
    getPostByNo
  };