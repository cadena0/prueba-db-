Table cliente [headercolor: #175e7a] {
	id serial [ pk, not null, unique ]
	nombre_cliente varchar [ not null ]
	email_cliente varchar [ not null ]
	dirrecion varchar [ not null ]
	compra_producto integer [ not null ]
	"fecha de venta" date

	indexes {
		() [ name: 'cliente_index_0' ]
	}
}

Table producto [headercolor: #175e7a] {
	id_transaccion serial [ pk, not null, unique ]
	categoria_producto varchar [ not null ]
	sku date [ not null ]
	"nombre del producto" varchar [ not null ]
	precio_unitario integer [ not null ]
	cantidad integer
	id_provedor integer
}

Table provedor [headercolor: #175e7a] {
	"id_provedor " integer [ pk, increment, not null, unique ]
	nombre_provedor varchar [ not null ]
	contacto_provedor integer
}

Ref fk_producto_id_provedor_provedor {
	producto.id_provedor > provedor."id_provedor " [ delete: no action, update: no action ]
}

Ref fk_cliente_id_producto {
	cliente.id < producto.cantidad [ delete: no action, update: no action ]
}