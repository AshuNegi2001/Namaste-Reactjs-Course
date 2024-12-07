export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
// export const IMG_CDN_URL =
//   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";  // MODIFIED THIS URL


export const swiggy_api_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// export const swiggy_api_URL1 = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5469116&lng=77.3424353&page_type=DESKTOP_WEB_LISTING";
// export const swiggy_api_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5469116&lng=77.3424353&page_type=DESKTOP_WEB_LISTING";

// old api restaurant menu => export const swiggyMenu_api_URL = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=28.5469116&lng=77.3424353&menuId=";

// Updated api of restaurant
export const swiggyMenu_api_URL = " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5482751&lng=77.34421929999999&restaurantId=";

// config Driven UI
// export const restaurantList = [
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "355357",
//       name: "Grameen Kulfi",
//       uuid: "a1c2e326-9464-4d06-8f90-2a0d42153be5",
//       city: "10459",
//       area: "Sector 45",
//       totalRatingsString: "20+ ratings",
//       cloudinaryImageId: "wnj8ppqwyza4ympg3bhu",
//       cuisines: ["Ice Cream", "Desserts"],
//       tags: [],
//       costForTwo: 12000,
//       costForTwoString: "₹120 FOR TWO",
//       deliveryTime: 15,
//       minDeliveryTime: 15,
//       maxDeliveryTime: 15,
//       slaString: "15 MINS",
//       lastMileTravel: 1.5,
//       slugs: {
//         restaurant: "grameen-kulfi-sector-45-golf-course",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address: "Shop No 03,Sadarpur,Sector 45, Noida UP 201303",
//       locality: "Golf Course",
//       parentId: 12175,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "Closes soon",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "1.5 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "355357",
//         deliveryTime: 15,
//         minDeliveryTime: 15,
//         maxDeliveryTime: 15,
//         lastMileTravel: 1.5,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.5",
//       totalRatings: 20,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "75757",
//       name: "NIC Ice Creams",
//       uuid: "3e620534-113b-4abd-8fb4-767e88713766",
//       city: "10459",
//       area: "Sector 45",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "91d6dda411b108965541c16ac1cfe2bc",
//       cuisines: ["Ice Cream", "Desserts"],
//       tags: [],
//       costForTwo: 12000,
//       costForTwoString: "₹120 FOR TWO",
//       deliveryTime: 16,
//       minDeliveryTime: 16,
//       maxDeliveryTime: 16,
//       slaString: "16 MINS",
//       lastMileTravel: 1.5,
//       slugs: {
//         restaurant: "nic-natural-ice-cream-sector-45-test_noida",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address: "Shop No 03,Sadarpur,Sector 45, Noida UP 201303",
//       locality: "Golf Course",
//       parentId: 6249,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "Closes soon",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "1.5 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "75757",
//         deliveryTime: 16,
//         minDeliveryTime: 16,
//         maxDeliveryTime: 16,
//         lastMileTravel: 1.5,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.6",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "177495",
//       name: "La Pino'z Pizza",
//       uuid: "e879581e-3f0e-4c60-ae09-79b19ceac6bc",
//       city: "10459",
//       area: "Hajipur",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "ugemttaiukyqfhxkfs9i",
//       cuisines: ["Pizzas", "Italian"],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: "₹300 FOR TWO",
//       deliveryTime: 23,
//       minDeliveryTime: 23,
//       maxDeliveryTime: 23,
//       slaString: "23 MINS",
//       lastMileTravel: 2.799999952316284,
//       slugs: {
//         restaurant: "la-pinoz-pizza-sector-104-golf-course",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address:
//         "GT01, Basement, Opp Pathways School, Sector 104, Noida - 201301",
//       locality: "Pathways School Road",
//       parentId: 4961,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       ribbon: [
//         {
//           type: "PROMOTED",
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "cid=5976614~p=4~eid=00000186-70ae-dd72-1aab-0b0600580402",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "2.7 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "177495",
//         deliveryTime: 23,
//         minDeliveryTime: 23,
//         maxDeliveryTime: 23,
//         lastMileTravel: 2.799999952316284,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: true,
//       avgRating: "3.7",
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "555538",
//       name: "Nirula's",
//       uuid: "04cff2c1-af14-4564-84ac-11a5587adb53",
//       city: "10459",
//       area: "Sadarpur",
//       totalRatingsString: "20+ ratings",
//       cloudinaryImageId: "pkfsepfc5a9vmnek95sk",
//       cuisines: [
//         "Pizzas",
//         "Burgers",
//         "Ice Cream",
//         "North Indian",
//         "Fast Food",
//         "Asian",
//         "Pastas",
//         "Desserts",
//         "Beverages",
//         "Snacks",
//       ],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: "₹500 FOR TWO",
//       deliveryTime: 19,
//       minDeliveryTime: 19,
//       maxDeliveryTime: 19,
//       slaString: "19 MINS",
//       lastMileTravel: 0.800000011920929,
//       slugs: {
//         restaurant: "nirula's-golf-course-golf-course",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address:
//         "Shop no 12, Amrapali Sapphire. Arcade -2 Sector 45 Noida.201303",
//       locality: "Sector 45",
//       parentId: 1738,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "0.8 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "555538",
//         deliveryTime: 19,
//         minDeliveryTime: 19,
//         maxDeliveryTime: 19,
//         lastMileTravel: 0.800000011920929,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "3.7",
//       totalRatings: 20,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "571461",
//       name: "Hong's Kitchen",
//       uuid: "dd828692-d4fa-4384-83a8-38bb9563f8d3",
//       city: "10459",
//       area: "Hajipur",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "hfo97622qjkgz6dm9nuy",
//       cuisines: ["Chinese", "Asian", "Tibetan"],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: "₹250 FOR TWO",
//       deliveryTime: 25,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 25,
//       slaString: "25 MINS",
//       lastMileTravel: 3,
//       slugs: {
//         restaurant: "hongs-kitchen-skymark-noida-expressway",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address:
//         "SKYMARK ONE SECTOR - 98, NOIDA, UTTAR PRADESH (Ground Floor, Shop No. J - 4, Tower E,Skymark One, H-10/A, Sector-98, Noida",
//       locality: "Vishwkarma Road",
//       parentId: 9547,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       ribbon: [
//         {
//           type: "PROMOTED",
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "Closes soon",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "cid=5866522~p=7~eid=00000186-70ae-dd72-1aab-0b0700580773",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "3 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "571461",
//         deliveryTime: 25,
//         minDeliveryTime: 25,
//         maxDeliveryTime: 25,
//         lastMileTravel: 3,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: true,
//       avgRating: "3.8",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "362214",
//       name: "Natural Ice Cream",
//       uuid: "f371b46c-a87d-4b4f-955c-efac8c8499c1",
//       city: "10459",
//       area: "Sector 48",
//       totalRatingsString: "20+ ratings",
//       cloudinaryImageId: "cwxftpfum7kmygu2gc5a",
//       cuisines: ["Ice Cream", "Desserts"],
//       tags: [],
//       costForTwo: 15000,
//       costForTwoString: "₹150 FOR TWO",
//       deliveryTime: 22,
//       minDeliveryTime: 22,
//       maxDeliveryTime: 22,
//       slaString: "22 MINS",
//       lastMileTravel: 2.700000047683716,
//       slugs: {
//         restaurant: "natural-ice-cream-greater-noida-46-golf-course",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address:
//         "B 156 A Above HDFC Bank,Tulip Mall SEC 46,Noida 201301,UTTAR PRADESH",
//       locality: "Golf Course",
//       parentId: 2093,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "Closes soon",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "2.7 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "362214",
//         deliveryTime: 22,
//         minDeliveryTime: 22,
//         maxDeliveryTime: 22,
//         lastMileTravel: 2.700000047683716,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "5.0",
//       totalRatings: 20,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "135385",
//       name: "Chandni Chowk Ke Mashhoor Paranthe",
//       uuid: "d971f2a7-d5af-47a1-8dd0-ecb89e157c5c",
//       city: "10459",
//       area: "Sector 18",
//       totalRatingsString: "100+ ratings",
//       cloudinaryImageId: "ec3c3a0cdeb60385ec12132e648bf408",
//       cuisines: ["North Indian", "Street Food"],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 28,
//       minDeliveryTime: 28,
//       maxDeliveryTime: 28,
//       slaString: "28 MINS",
//       lastMileTravel: 4.599999904632568,
//       slugs: {
//         restaurant: "chandni-chowk-ke-mashhoor-parathe-golf-course",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address: "F 25 second floor Savitri Market Sector 18 Noida",
//       locality: "Golf Course Road",
//       parentId: 5412,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "FREE DELIVERY",
//         shortDescriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "",
//         shortDescriptionList: [
//           {
//             meta: "Free Delivery",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "FREE DELIVERY",
//             discountType: "FREE_DELIVERY",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "4.5 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "135385",
//         deliveryTime: 28,
//         minDeliveryTime: 28,
//         maxDeliveryTime: 28,
//         lastMileTravel: 4.599999904632568,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: false,
//       avgRating: "4.3",
//       totalRatings: 100,
//       new: false,
//     },
//     subtype: "basic",
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "234763",
//       name: "Chaayos Chai+Snacks=Relax",
//       uuid: "51ce0170-eaa9-4358-8ced-7e3c881dfe72",
//       city: "10459",
//       area: "Sector 142",
//       totalRatingsString: "500+ ratings",
//       cloudinaryImageId: "oxthhcdwhqhu5lhd8fh3",
//       cuisines: [
//         "Bakery",
//         "Beverages",
//         "Chaat",
//         "Desserts",
//         "Fast Food",
//         "Home Food",
//         "Italian",
//         "Maharashtrian",
//         "Snacks",
//         "Street Food",
//         "Sweets",
//       ],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: "₹250 FOR TWO",
//       deliveryTime: 39,
//       minDeliveryTime: 39,
//       maxDeliveryTime: 39,
//       slaString: "39 MINS",
//       lastMileTravel: 9.199999809265137,
//       slugs: {
//         restaurant: "chaayos-orion-mall-noida-expressway",
//         city: "noida-1",
//       },
//       cityState: "10459",
//       address:
//         "Unit No. 8 on GF, Tower C, Advant Navis Business Park, Noida Expressway Sector 142, Noida 201305\t",
//       locality: "Advant Navis Business Park",
//       parentId: 281782,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: "40% off",
//         shortDescriptionList: [
//           {
//             meta: "40% off | Use TRYNEW",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "40% off up to ₹80 | Use code TRYNEW",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       aggregatedDiscountInfoV2: {
//         header: "40% OFF",
//         shortDescriptionList: [
//           {
//             meta: "Use TRYNEW",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         descriptionList: [
//           {
//             meta: "40% off up to ₹80 | Use code TRYNEW",
//             discountType: "Percentage",
//             operationType: "RESTAURANT",
//           },
//         ],
//         subHeader: "",
//         headerType: 0,
//         superFreedel: "",
//       },
//       ribbon: [
//         {
//           type: "PROMOTED",
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [],
//         totalFees: 0,
//         message: "",
//         title: "",
//         amount: "",
//         icon: "",
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: "",
//         nextCloseMessage: "",
//       },
//       longDistanceEnabled: 0,
//       rainMode: "NONE",
//       thirdPartyAddress: false,
//       thirdPartyVendor: "",
//       adTrackingID: "cid=5976628~p=10~eid=00000186-70ae-dd72-1aab-0b0800580a40",
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: "9.1 kms",
//       hasSurge: false,
//       sla: {
//         restaurantId: "234763",
//         deliveryTime: 39,
//         minDeliveryTime: 39,
//         maxDeliveryTime: 39,
//         lastMileTravel: 9.199999809265137,
//         lastMileDistance: 0,
//         serviceability: "SERVICEABLE",
//         rainMode: "NONE",
//         longDistance: "NOT_LONG_DISTANCE",
//         preferentialService: false,
//         iconType: "EMPTY",
//       },
//       promoted: true,
//       avgRating: "4.3",
//       totalRatings: 500,
//       new: false,
//     },
//     subtype: "basic",
//   },
// ];

export const github_api_URL = "https://api.github.com/users/AshuNegi2001";

 export const shimmer_card_unit = 15;