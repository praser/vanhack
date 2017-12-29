class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :user_id, :user_name

  def user_name
    object.user.name
  end
end
