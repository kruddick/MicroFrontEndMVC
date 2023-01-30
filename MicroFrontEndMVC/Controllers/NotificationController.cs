using MicroFrontEndMVC.SignalRHubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace MicroFrontEndMVC.Controllers
{
    public class NotificationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        private readonly IHubContext<NotificationHub> notificationHubContext;

        public NotificationController(IHubContext<NotificationHub> notificationHubContext)
        {
            this.notificationHubContext = notificationHubContext;
        }

        [HttpPost]
        public async Task<IActionResult> SendPageNotificationToAll(string message, string bgColor = "#00F")
        {
            await notificationHubContext.Clients.All.SendAsync("PageNotification", new { message = message, color = bgColor });
            return Ok();
        }

    }
}
