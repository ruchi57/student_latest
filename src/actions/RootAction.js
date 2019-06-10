import { ADD_ARTICLE, ADD_STUDENT, REMOVE_STUDENT, EDIT_STUDENT } from "../constants/action-types";


export function addArticle(payload) {
  debugger;
  return { type: ADD_ARTICLE, payload };
}

export function addStudent(payload) {
  debugger;
  return { type: ADD_STUDENT, payload };
}

export function removeStudent(payload) {
  return { type: REMOVE_STUDENT, payload };
}

export function editStudent(payload) {
  return { type: EDIT_STUDENT, payload };
}