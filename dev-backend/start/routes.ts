import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.get("/all", "StudentsController.index");
  Route.get("/activities", "StudentActivitiesController.index");
  Route.post("/attendances", "StudentAttendancesController.index");
  Route.post("/attendances/create", "StudentAttendancesController.create");
  Route.get("/classes", "ClassesController.index");
}).prefix("/student");
