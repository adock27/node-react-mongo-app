import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// my imports
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;



  // id from url param  
  id: string | null;

  // page_title  
  titulo: string = 'Agregar nuevo producto';
  botton: string = 'guardar';


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({

      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });

    // get id from url param 
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerProducto(this.id);
  }

  public guardar() {
    if (this.id !== null) {
      this.actualizarProducto(this.id,);
      this.obtenerProducto(this.id);
    } else {
      this.agregarProducto();
    }
  }

  public async agregarProducto() {

    const producto: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }


    await this._productoService.addSingleProduct(producto);

    this.router.navigate(['']);
    this.toastr.success('Fue guardado con exito', `Producto ${producto.nombre} Registrado!`);

  }

  // editar producto 
  public async obtenerProducto(id: any) {
    const producto: Producto = await this._productoService.getSingleProduct(id);
    this.productoForm.setValue({
      nombre: producto.nombre,
      categoria: producto.categoria,
      ubicacion: producto.ubicacion,
      precio: producto.precio,
    });
  }


  public async actualizarProducto(id:any) {

    const producto: Producto = {
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }

    console.log(producto);
    const productos: Producto = await this._productoService.updateSingleProduct(producto);
  }

}
