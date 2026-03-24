using Microsoft.AspNetCore.SignalR;

namespace chatapp.hub
{
    public class Chathub : Hub
    {

        public async Task<string> SendAsync(string user,string message)
        {
           await Clients.All.SendAsync("receive message",user,message);

            return null;
        }
    }
}