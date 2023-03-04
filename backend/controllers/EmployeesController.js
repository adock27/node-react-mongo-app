


// export class ProductoService {
//     private url: string = "http://localhost:4000/api";
//     constructor(private http: HttpService) { }

//     public async getAllProducts(): Promise<Producto[]>{
//         return await this.http.get(`${this.url}/productos`);
//     }

//     public async getSingleProduct(id: Producto["_id"]){
//         return await this.http.get(`${this.url}/productos/${id}`);
//     }

//     public async addSingleProduct(product: Producto) {
//         return await this.http.post(`${this.url}/productos`, product);
//     }

//     public async updateSingleProduct(product: Producto) {
//         return await this.http.put(`${this.url}/productos`, product);
//     }

//     public async deleteSingleProduct(id: Producto["_id"]) {
//         return await this.http.delete(`${this.url}/productos/${id}`);
//     }

// }