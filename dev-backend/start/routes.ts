import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/", "StudentsController.show");
  Route.get("/all", "StudentsController.index");
  Route.get("/activities", "StudentActivitiesController.index");
  Route.post("/attendances", "StudentAttendancesController.index");
  Route.post("/attendances/create", "StudentAttendancesController.create");
  Route.get("/classes", "ClassesController.index");
}).prefix("/student");

Route.group(() => {
  Route.get("/all", "SettingsController.index");
  Route.patch("/update", "SettingsController.index");
}).prefix("/settings");
