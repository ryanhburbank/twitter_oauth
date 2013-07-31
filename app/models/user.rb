class User < ActiveRecord::Base
  
  def create_client
    Twitter::Client.new(
      :oauth_token => self.oauth_token,
      :oauth_token_secret => self.oauth_secret
    )
  end
  # Remember to create a migration!
end
