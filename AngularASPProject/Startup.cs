using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularASPProject.Startup))]
namespace AngularASPProject
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
