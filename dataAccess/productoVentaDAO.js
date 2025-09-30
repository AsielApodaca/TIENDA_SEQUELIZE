const { ProductoVenta } = require('../models');

class ProductoVentaDAO {
    constructor() {}

    async crearProductoVenta(idventa, idproducto, cantidadvendida, subtotal, precioVenta) {
        try {
            const productoVenta = await ProductoVenta.create({
                idventa,
                idproducto,
                cantidadvendida,
                subtotal,
                precioVenta
            });
            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductosVenta() {
        try {
            const productosVenta = await ProductoVenta.findAll();
            return productosVenta;
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductoVentaPorId(id) {
        try {
            const productoVenta = await ProductoVenta.findByPk(id);
            return productoVenta;
        } catch (error) {
            throw error;
        }
    }

    async actualizarProductoVenta(id, idventa, idproducto, cantidadvendida, subtotal, precioVenta) {
        try {
            await ProductoVenta.update(
                { idventa, idproducto, cantidadvendida, subtotal, precioVenta },
                { where: { id } }
            );
            const productoVentaActualizado = await ProductoVenta.findByPk(id);
            return productoVentaActualizado;
        } catch (error) {
            throw error;
        }
    }

    async eliminarProductoVenta(id) {
        try {
            const productoVenta = await ProductoVenta.findByPk(id);
            if (!productoVenta) {
                throw new Error('ProductoVenta no encontrado');
            }
            await productoVenta.destroy();
            return 'ProductoVenta eliminado con éxito';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductoVentaDAO();