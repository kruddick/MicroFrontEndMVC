namespace MicroFrontEndMVC.Models
{
    public class SubscriptionViewModel
    {
        public string AgentId { get; set; } = "Captain Hook";
        public List<Subscription> Subscriptions { get; set; } = new();

        public SubscriptionViewModel()
        {
            Subscriptions.Add(
                new Subscription
                {
                    SubscriptionCssId = "home",
                    SubscriptionCssClass = "component",
                    SubscriptionName = "Home",
                    ComponentType = "component",
                    FileNameCss = "home.css",
                    FileNameJs = "home.js"
                }
            );

            Subscriptions.Add(
                new Subscription
                {
                    SubscriptionCssId = "client",
                    SubscriptionCssClass = "component",
                    SubscriptionName = "Clients",
                    ComponentType = "component",
                    FileNameCss = "",
                    FileNameJs = ""
                }
            );

            Subscriptions.Add(
                new Subscription
                {
                    SubscriptionCssId = "accounts",
                    SubscriptionCssClass = "component",
                    SubscriptionName = "Accounts",
                    ComponentType = "component",
                    FileNameCss = "",
                    FileNameJs = ""
                }
            );

            Subscriptions.Add(
                new Subscription
                {
                    SubscriptionCssId = "tracking-center",
                    SubscriptionCssClass = "component",
                    SubscriptionName = "Tracking Center",
                    ComponentType = "component",
                    FileNameCss = "",
                    FileNameJs = ""
                }
            );

            Subscriptions.Add(
                new Subscription
                {
                    SubscriptionCssId = "model-picker",
                    SubscriptionCssClass = "overlay",
                    SubscriptionName = "Model Picker",
                    ComponentType = "overlay",
                    FileNameCss = "",
                    FileNameJs = ""
                }
            );
        }
    }


    public class Subscription
    {
        public string SubscriptionCssId { get; set; } = "";
        public string SubscriptionCssClass { get; set; } = "";
        public string SubscriptionName { get; set; } = "";
        public string ComponentType { get; set; } = "";
        public string FileNameJs { get; set; } = "";
        public string FileNameCss { get; set; } = "";

    }
}
