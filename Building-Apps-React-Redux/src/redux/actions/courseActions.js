import ActionTypes from "./actions.type";

export function createCourse(course) {
  return { type: ActionTypes.CREATE_COURSE, course: course };
}
