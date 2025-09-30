const productoDAO = require('./dataAccess/productoDAO');
const ventaDAO = require('./dataAccess/ventaDAO');
const productoVentaDAO = require('./dataAccess/productoVentaDAO');

async function pruebas() {
    try {
        console.log('=== INICIANDO PRUEBAS ===\n');

        // Pruebas para ProductoDAO
        console.log('1. Probando ProductoDAO...');
        
        // Crear un producto
        console.log('Creando producto...');
        const nuevoProducto = await productoDAO.crearProducto('Laptop', 1500.00, 10);
        console.log('Producto creado:', nuevoProducto.toJSON());

        // Obtener todos los productos
        console.log('\nObteniendo todos los productos...');
        const productos = await productoDAO.obtenerProductos();
        console.log('Productos encontrados:', productos.length);

        // Obtener producto por ID
        console.log('\nObteniendo producto por ID...');
        const producto = await productoDAO.obtenerProductoPorId(nuevoProducto.id);
        console.log('Producto encontrado:', producto.toJSON());

        // Actualizar producto
        console.log('\nActualizando producto...');
        const productoActualizado = await productoDAO.actualizarProducto(
            nuevoProducto.id, 
            'Laptop Gamer', 
            1800.00, 
            8
        );
        console.log('Producto actualizado:', productoActualizado.toJSON());

        // Pruebas para VentaDAO
        console.log('\n2. Probando VentaDAO...');
        
        // Crear una venta
        console.log('Creando venta...');
        const nuevaVenta = await ventaDAO.crearVenta(1800.00, 288.00);
        console.log('Venta creada:', nuevaVenta.toJSON());

        // Obtener todas las ventas
        console.log('\nObteniendo todas las ventas...');
        const ventas = await ventaDAO.obtenerVentas();
        console.log('Ventas encontradas:', ventas.length);

        // Pruebas para ProductoVentaDAO
        console.log('\n3. Probando ProductoVentaDAO...');
        
        // Crear relación producto-venta
        console.log('Creando relación producto-venta...');
        const nuevoProductoVenta = await productoVentaDAO.crearProductoVenta(
            nuevaVenta.id,
            nuevoProducto.id,
            1,
            1800.00,
            1800.00
        );
        console.log('Relación producto-venta creada:', nuevoProductoVenta.toJSON());

        // Obtener todas las relaciones producto-venta
        console.log('\nObteniendo todas las relaciones producto-venta...');
        const productosVenta = await productoVentaDAO.obtenerProductosVenta();
        console.log('Relaciones encontradas:', productosVenta.length);

        // Pruebas de eliminación
        console.log('\n4. Probando eliminaciones...');
        
        // Eliminar relación producto-venta
        console.log('Eliminando relación producto-venta...');
        const resultadoEliminarPV = await productoVentaDAO.eliminarProductoVenta(nuevoProductoVenta.id);
        console.log('Resultado:', resultadoEliminarPV);

        // Eliminar venta
        console.log('\nEliminando venta...');
        const resultadoEliminarVenta = await ventaDAO.eliminarVenta(nuevaVenta.id);
        console.log('Resultado:', resultadoEliminarVenta);

        // Eliminar producto
        console.log('\nEliminando producto...');
        const resultadoEliminarProducto = await productoDAO.eliminarProducto(nuevoProducto.id);
        console.log('Resultado:', resultadoEliminarProducto);

        console.log('\n=== PRUEBAS COMPLETADAS ===');

    } catch (error) {
        console.error('Error durante las pruebas:', error);
    }
}

// Ejecutar las pruebas
pruebas();