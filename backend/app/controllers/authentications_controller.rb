class AuthenticationsController < ApplicationController
  def authenticate
    @user = User.find_by(email: user_params[:email]).try(:authenticate, user_params[:password])
    if @user
      render json: @user, status: :created, location: @user
    else
      render json: {error: 'Invalid credentials'}, status: :unauthorized
    end
  end

  private

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.permit(:email, :password)
  end
end
