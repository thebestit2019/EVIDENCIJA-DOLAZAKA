using System;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Linq;
using System.Collections.Generic;

[Route("/api")]
[ApiController]
public class CheckinController : Controller{

    private Context checkinContext {get; set;}
    private JsonSerializerSettings jsonSerializer {get; set;}

    public CheckinController(Context cont){

        this.checkinContext = cont;
        jsonSerializer = new JsonSerializerSettings();
        jsonSerializer.Formatting = Formatting.Indented;
        jsonSerializer.PreserveReferencesHandling =   PreserveReferencesHandling.Objects;
    }
    
    [HttpGet]
    [Route("/{pin}")]
    public JsonResult GetEmp(string pin){
        var employee = checkinContext.radnici.Where(e => e.pin == pin).FirstOrDefault();

        return new JsonResult(employee, jsonSerializer);

    }
    
}

