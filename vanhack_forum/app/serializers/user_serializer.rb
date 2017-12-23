class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :agreed
end
