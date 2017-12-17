module Services
  class Price
    require 'httparty'

    class << self
      def bitcoin
        bitcoin_response = HTTParty.get('https://broker.negociecoins.com.br/api/v3/btcbrl/ticker')

        sell_price = bitcoin_response.parsed_response["buy"]
        # The platform sells for a price 0,6% higher
        # then the value brought by the API
        buy_price = (bitcoin_response.parsed_response["sell"]).round(2)

        { buy_price: buy_price, sell_price: sell_price }
      end

      def litecoin
        bitcoin_response = HTTParty.get('https://broker.negociecoins.com.br/api/v3/ltcbrl/ticker')

        sell_price = bitcoin_response.parsed_response["buy"]
        # The platform sells for a price 0,6% higher
        # then the value brought by the API
        buy_price = (bitcoin_response.parsed_response["sell"]).round(2)

        { buy_price: buy_price, sell_price: sell_price }
      end
    end
  end
end
