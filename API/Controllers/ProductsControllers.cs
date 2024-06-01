using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsControllers : ControllerBase
    {
        private readonly StoreContext _context;

        public ProductsControllers(Data.StoreContext context)
    {
            this._context = context;
        }
        [HttpGet]
        // returns all products from the database
        public async Task< ActionResult<List<Product>>>GetProducts(){
            var products= await _context.Products.ToListAsync();
            return Ok(products);
        }
        [HttpGet("{id}")]
        // returns a chosen Product via ID
        public async Task< ActionResult<Product>> GetProduct(int id){
            return await _context.Products.FindAsync(id);
        }

    }
}