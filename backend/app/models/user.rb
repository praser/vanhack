class User < ApplicationRecord
  has_secure_password
  
  validates :name, :email, :agreement, presence: true
  validates :email, uniqueness: true
  validates :email, format: {
    with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i,
    message: 'Email seems to be invalid'
  }
end
