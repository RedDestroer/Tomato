using System.Collections.Generic;
using System.Threading.Tasks;
using Vendor.Api.Dtos;

namespace Vendor.Api.Services
{
    public interface ITomatoService
    {
        Task<Tomato> Get(int id);
        Task<List<Tomato>> GetList();
    }

    public class TomatoService : ITomatoService
    {
        public Task<Tomato> Get(int id)
        {
            var tomato = new Tomato();

            return Task.FromResult(tomato);
        }

        public Task<List<Tomato>> GetList()
        {
            var tomatos = new List<Tomato>();

            tomatos.Add(new Tomato
            {
                Id = 1,
                Name = "Tomato 1",
                PictureUrl = "Picture 1"
            });
            tomatos.Add(new Tomato
            {
                Id = 2,
                Name = "Tomato 2",
                PictureUrl = "Picture 2"
            });

            return Task.FromResult(tomatos);
        }
    }
}