class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :agreement, :api_key, :avatar
end
