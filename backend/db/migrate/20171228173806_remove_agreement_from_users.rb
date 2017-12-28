class RemoveAgreementFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :agreement, :string
  end
end
