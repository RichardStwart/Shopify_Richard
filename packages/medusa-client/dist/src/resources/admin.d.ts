import * as Apps from "../../generated/admin/apps/apps";
import * as Auth from "../../generated/admin/auth/auth";
import * as Claim from "../../generated/admin/claim/claim";
import * as Collection from "../../generated/admin/collection/collection";
import * as Customer from "../../generated/admin/customer/customer";
import * as CustomerGroup from "../../generated/admin/customer-group/customer-group";
import * as Discount from "../../generated/admin/discount/discount";
import * as DraftOrder from "../../generated/admin/draft-order/draft-order";
import * as Fulfillment from "../../generated/admin/fulfillment/fulfillment";
import * as GiftCard from "../../generated/admin/gift-card/gift-card";
import * as Invite from "../../generated/admin/invites/invites";
import * as Note from "../../generated/admin/note/note";
import * as Notification from "../../generated/admin/notification/notification";
import * as Order from "../../generated/admin/order/order";
import * as Product from "../../generated/admin/product/product";
import * as ProductTag from "../../generated/admin/product-tag/product-tag";
import * as ProductVariant from "../../generated/admin/product-variant/product-variant";
import * as Region from "../../generated/admin/region/region";
import * as Return from "../../generated/admin/return/return";
import * as ReturnReason from "../../generated/admin/return-reason/return-reason";
import * as ShippingOption from "../../generated/admin/shipping-option/shipping-option";
import * as ShippingProfile from "../../generated/admin/shipping-profile/shipping-profile";
import * as Store from "../../generated/admin/store/store";
import * as Swap from "../../generated/admin/swap/swap";
import * as TaxRate from "../../generated/admin/tax-rates/tax-rates";
import * as Upload from "../../generated/admin/uploads/uploads";
import * as User from "../../generated/admin/users/users";
import * as PriceList from "../../generated/admin/price-list/price-list";
declare class MedusaAdmin {
    apps: typeof Apps;
    auth: typeof Auth;
    claims: typeof Claim;
    collections: typeof Collection;
    customers: typeof Customer;
    customerGroups: typeof CustomerGroup;
    discounts: typeof Discount;
    draftOrders: typeof DraftOrder;
    fulfillments: typeof Fulfillment;
    giftCards: typeof GiftCard;
    invites: typeof Invite;
    notes: typeof Note;
    notifications: typeof Notification;
    orders: typeof Order;
    products: typeof Product;
    tags: typeof ProductTag;
    variants: typeof ProductVariant;
    regions: typeof Region;
    returns: typeof Return;
    returnReasons: typeof ReturnReason;
    shippingOptions: typeof ShippingOption;
    shippingProfiles: typeof ShippingProfile;
    stores: typeof Store;
    swaps: typeof Swap;
    taxRates: typeof TaxRate;
    uploads: typeof Upload;
    users: typeof User;
    priceLists: typeof PriceList;
    constructor();
}
export default MedusaAdmin;
