def logged_in?
  true if current_user
end


def current_user
  @current_user ||= User.find(session[:user_id])
end
