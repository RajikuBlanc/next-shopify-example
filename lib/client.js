import Client from 'shopify-buy';
export const client = Client.buildClient({
  domain: process.env.DOMAIN, //自分のストアのURLを入力する
  storefrontAccessToken: process.env.STORE_FRONT_ACCESSE_TOKEN //自分のStorefront APIのアクセストークンを入力する
});
