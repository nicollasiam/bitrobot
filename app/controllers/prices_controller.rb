class PricesController < ApplicationController
  def index
    $bitcoin_purchase = 70000
    $litecoin_purchase = 1100

    @bitcoin_value = ::Services::Price.bitcoin[:sell_price]
    @bitcoin_percentage = ((@bitcoin_value - $bitcoin_purchase) / $bitcoin_purchase * 100).round(2)

    @litecoin_value = ::Services::Price.litecoin[:sell_price]
    @litecoin_percentage = ((@litecoin_value - $litecoin_purchase) / $litecoin_purchase * 100).round(2)
  end
end
