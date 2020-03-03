using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using WebAPI.Data;

namespace RPI.SignalR
{
    public class CommunicationHub : Hub
    {

        public async Task Send(string user, LightResponse data)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, data);
        }
    }
}