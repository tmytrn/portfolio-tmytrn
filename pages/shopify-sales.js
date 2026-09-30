import ShopifyLandingPageTemplate from "../components/ShopifyLandingPageTemplate";
import { shopifySalesContent } from "../lib/shopifyPageContent";

export default function ShopifySales() {
  return <ShopifyLandingPageTemplate content={shopifySalesContent} variant="shopify-sales" />;
}
