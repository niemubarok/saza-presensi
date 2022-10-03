import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.get("/all", "StudentsController.index");
  Route.get("/activities", "StudentActivitiesController.index");
  Route.get("/attendances", "StudentAttendancesController.index");
  Route.get("/classes", "ClassesController.index");
}).prefix("/student");
