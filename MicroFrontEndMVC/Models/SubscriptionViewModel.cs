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
                    SubscriptionCssId = "homepage",
                    SubscriptionCssClass = "component",
                    SubscriptionName = "Home",
                    ComponentType = "component",
                    FileNameCss = "",
                    FileNameJs = "/js/homepage.1.0.0.js"
                }
            );

            Subscriptions.Add(
                new Subscription
                {
                    SubscriptionCssId = "client-component",
                    SubscriptionCssClass = "component",
                    SubscriptionName = "Clients",
                    ComponentType = "component",
                    FileNameCss = "",
                    FileNameJs = "/js/clients-component.1.0.0.js"
                }
            );

            Subscriptions.Add(
                new Subscription
                {
                    SubscriptionCssId = "account-data",
                    SubscriptionCssClass = "component",
                    SubscriptionName = "Accounts",
                    ComponentType = "component",
                    FileNameCss = "",
                    FileNameJs = "/js/account-data.1.0.0.js"
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
                    SubscriptionCssId = "spinner",
                    SubscriptionCssClass = "overlay",
                    SubscriptionName = "spinner",
                    ComponentType = "overlay",
                    FileNameCss = "",
                    FileNameJs = "/js/spinner.1.0.0.js"
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
