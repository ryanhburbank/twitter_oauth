ENV['TWITTER_KEY'] ="OKlL5RRYIkYGyHS1rrd1g"
ENV['TWITTER_SECRET'] = "kkXLUNI3ZkDS95OFNJ3y000ALVyRxOQ6aygMc6Io9DM"

Twitter.configure do |config|
  config.consumer_key = ENV['TWITTER_KEY']
  config.consumer_secret = ENV['TWITTER_SECRET']
end

