import ShopifyLandingPageTemplate from "../components/ShopifyLandingPageTemplate";
import { shopifyGrowthContent } from "../lib/shopifyPageContent";

export default function ShopifyGrowth() {
  return <ShopifyLandingPageTemplate content={shopifyGrowthContent} variant="shopify-growth" />;
}
