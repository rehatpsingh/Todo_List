using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TODO_Api.Models;
using WebApi.Services;

namespace TODO_Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private readonly TodoContext _context;

        public UsersController(IUserService userService, TodoContext context)
        {
            _userService = userService;
            _context = context;
        }

        [HttpPost]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var database_user = _context.Users.Where(user=>user.Username == model.Username && user.Password == model.Password).FirstOrDefault();
            var response = _userService.Authenticate(database_user);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
    }
}