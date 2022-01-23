//const pkg = require("express");
//const { Router } = pkg;
//const employeesController = require('../controller/employeecontroller')
const splistController = require("../controller/splistController");

const router = require('express').Router();
// router.get("/api/getEmployees", employeesController.getEmployees);
// router.get("/api/getAllEmployees", employeesController.getAllEmployees);
// router.get(
//   "/api/getAllEmployeesBySorting",
//   employeesController.getAllEmployeesBySorting
// );
// router.get(
//   "/api/getAllEmployeesBySortWithFilter",
//   employeesController.getAllEmployeesBySortWithFilter
// );
// router.get("/api/getFilms", employeesController.getFilms);
// router.get("/api/getEmployeeDetails", employeesController.getEmployeeDetails);
// router.post("/api/saveEmployee", employeesController.saveEmployee);
// router.post("/api/updateEmployee", employeesController.updateEmployee);
// router.delete("/api/deleteEmployee", employeesController.deleteEmployee);

router.get("/api/getAllTestListItems", splistController.getAllTestListItems);
// router.get("/api/getAllTestListItems", splistController.getAllTestListItems);
// router.get("/api/getNextListItems", splistController.getNextListItems);
// router.get("/api/getListItemCount", splistController.getListItemCount);
// router.post("/api/createListItem", splistController.createListItem);
// router.post("/api/updateListItem", splistController.updateListItem);
// router.delete("/api/deleteListItem", splistController.deleteListItem);
module.exports = router;
