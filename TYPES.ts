import React from "react";

export interface TaskProps {
  allTasks: TaskObj[];
  title: string;
  complete: boolean;
  i: number;
  taskTouchHandler: React.Dispatch<React.SetStateAction<TaskObj[]>>;
}

export interface TaskObj {
  title: string;
  complete: boolean;
}