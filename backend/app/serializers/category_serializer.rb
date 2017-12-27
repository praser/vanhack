class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :text
end
