class RemoveColumnFromStocks < ActiveRecord::Migration[6.0]
  def change
    remove_column :stocks, :name, :string
  end
end
