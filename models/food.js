// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var food = {
    selectAll: function (cb) {
        orm.select("foods_tbl", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    createOne: function (cols, vals, cb) {
        orm.create("foods_tbl", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.update("foods_tbl", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("foods_tbl", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (foodsController.js).
module.exports = food;
