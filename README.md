# A Shopify Checkout Multipass Test Endpoint

用 [multipassify](https://github.com/beaucoo/multipassify) 實作一個測試用 API。

```
[方法/API]: POST /
[參數]:
  {
    "webUrl": "https://..."
  }
[成功回應]:
  {
    "redirectURL": "https://..."
  }
```

![checkout-flow](https://github.com/Lianginger/a-shopify-checkout-multipass-test-endpoint/blob/master/shopify-checkout-multipass.png)

1. 使用 Storefront API 建立 checkout，將 variantId 和 quantity 加入 checkout，checkout.webUrl 可取得【前往 Shopify 的結帳連結】。
2. 如果使用者未登入，直接前往 Shopify 結帳連結。
3. 如果使用這已登入，將【前往 Shopify 的結帳連結】傳給後端，後端產生 multipass token，將【重導向連結】傳給前端。

參考資料：

- https://shopify.github.io/js-buy-sdk/#adding-line-items
- https://shopify.dev/tutorials/create-a-checkout-with-storefront-api#completing-the-checkout
- https://shopify.dev/docs/admin-api/rest/reference/plus/multipass
