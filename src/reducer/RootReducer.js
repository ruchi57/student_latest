import { ADD_ARTICLE, ADD_STUDENT, REMOVE_STUDENT } from "../constants/action-types";


const initialState = {
  articles: [
    { title: "React Redux Tutorial for Beginners", id: 1 },
    { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
  ],

  students: [{ Email: "Ruchi", Gender: "Female", Country: "India", Hobby: ["Travel"] },
  { Email: "Maya", Gender: "Female", Country: "India", Hobby: ["Dance"] },
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }

    case ADD_STUDENT: {
      debugger;
      return Object.assign({}, state, {
        students: state.students.concat(action.payload)
      });
    }

    case REMOVE_STUDENT: {
      var studentsNew = state.students.filter(function (value, index) {
        return action.payload.indexOf(index) == -1;
      });
      return Object.assign({}, state, {
        students: studentsNew
      });
    }

    // case EDIT_STUDENT: {

    //   state.students.forEach(function (student, index) {
    //     if (action.payload.)
    //   })
    // }
  }
  return state;
}

export default rootReducer;