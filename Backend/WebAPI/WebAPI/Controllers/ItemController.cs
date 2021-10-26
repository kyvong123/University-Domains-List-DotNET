//using LinqToDB;
//using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Net;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ItemController : ApiController
    {
        readonly DataContext _context;
        [System.Web.Mvc.HttpGet]
        [System.Web.Mvc.Route("api/Items")]
        [System.Web.Mvc.AllowAnonymous]
        public HttpResponseMessage GetItems()
        {
            var item = _context.DbItems
                .Select(x => new Item()
                {
                    ItemID = x.ItemID,
                    ItemName = x.ItemName,
                    ItemStatus = x.ItemStatus,
                    Description = x.Description,
                    Note = x.Note
                }).ToList();
            return this.Request.CreateResponse(HttpStatusCode.OK, item);
        }
    }
    //[Route("api/[controller]")]
    //[ApiController]
    //public class ItemController : Controller
    //{
    //    private readonly DataContext _context;

    //    public ItemController(DataContext context)
    //    {
    //        _context = context;
    //    }

    //    [HttpGet("byid/{id}")]
    //    public IEnumerable<Item> GetItemById(int id)
    //    {
    //        var item = _context.DBItems.Where(x => x.ItemID == id).Select(x => new Item()
    //        {
    //            ItemID = x.ItemID,
    //            ItemName = x.ItemName,
    //            Description = x.Description,
    //            ItemStatus = x.ItemStatus,
    //            Note = x.Note
    //        }).ToList();
    //        return item;
    //    }

    //    public ActionResult Index()
    //    {
    //        return View();
    //    }
    //}
}