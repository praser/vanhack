class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :agreement
end
