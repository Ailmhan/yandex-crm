import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("Сегодняшние заявки", "Сегодняшние заявки");

  return (
    <LayoutRoutes title="Сегодняшние заявки" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
