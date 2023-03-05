import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  
  public productos: Producto[] = [];

  constructor(
    private _productoService: ProductoService,
    private toastr: ToastrService
    ) {}

  async ngOnInit() {
    await this.obtenerProductos();
  }

  public async obtenerProductos() {
    this.productos = await this._productoService.getAllProducts();
    // console.log(this.productos);
  }


  public async eliminarProducto(id: any) {
    this.productos = await this._productoService.deleteSingleProduct(id);
    this.toastr.error('Fue eliminado con exito', 'Producto Eliminado!');
    this.obtenerProductos();
  }

}
