const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Products = sequelize.define(
        "Products",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    len: {
                        args: [1, 50],
                        msg: "El nombre debe tener entre 1 y 50 caracteres.",
                    },
                },
            },
            isFree: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            price: {
                type: DataTypes.DECIMAL(9, 2),
                defaultValue: 0,
                validate: {
                    min: 0,
                },
                set(value) {
                    if (this.getDataValue('isFree')) {
                        this.setDataValue('price', 0);
                    } else {
                        this.setDataValue('price', value);
                    }
                }
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            creationTime: {
                type: DataTypes.TIME,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        { timestamps: true }
    );

    return Products;
};
