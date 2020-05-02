class AddForeignKeyToPrices < ActiveRecord::Migration[6.0]
  def change
    add_column :prices, :stock_id, :integer
  end
end
