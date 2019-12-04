module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        // Giving the Author model a name of type STRING
        burger_namez: DataTypes.STRING,
        // As soon as you need to define a default value, not-null, autoincrement etc,
        // then your property's value needs to be another object where you
    //  make those definitions
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
}