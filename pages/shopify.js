import ShopifyLandingPageTemplate from "../components/ShopifyLandingPageTemplate";
import { shopifyContent } from "../lib/shopifyPageContent";

export default function Shopify() {
  return <ShopifyLandingPageTemplate content={shopifyContent} variant="shopify" />;
}
