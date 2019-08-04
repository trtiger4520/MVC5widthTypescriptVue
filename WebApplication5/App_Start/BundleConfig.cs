using System.Web;
using System.Web.Optimization;

namespace WebApplication5
{
    public class BundleConfig
    {
        // 如需統合的詳細資訊，請瀏覽 https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Style/MainStyle").Include("~/Content/Main.css"));
            bundles.Add(new ScriptBundle("~/Script/RequireJs").Include("~/node_modules/requirejs/require.js"));
        }
    }
}
