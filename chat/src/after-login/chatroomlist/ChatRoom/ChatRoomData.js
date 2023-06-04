const chatList = [
    {
      "no": 1,
      "name": "1번방",
    },
    {
      "no": 2,
      "name": "2번방",
    },
    {
      "no": 3,
      "name": "3번방",
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