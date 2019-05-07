const initState = {
  projects: [
    {
      id: "1",
      title: "Alibaba gives new titles to many SCMP staff",
      content:
        "further cost-cutting measures. The paper cut bonuses last year after the company built a ..."
    },
    {
      id: "2",
      title:
        "Kate Middleton new title: What does Dame Grand Cross of the Royal ...",
      content:
        "Platinum Games teases two new wholly-owned IPs, new title that “has never been done before"
    },
    {
      id: "3",
      title: "Platinum Games teases two new wholly-owned IPs, new title that ",
      content:
        "Amy Poehler recruits a cast of SNL powerhouses—including Tina Fey, Maya Rudolph and Ana Gasteyer—for her Bridesmaids-esq"
    }
  ]
};
const projectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log("CREATE_PROJECT", action.project);
  }
  return state;
};

export default projectReducer;
