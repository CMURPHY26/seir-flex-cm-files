class CreatePrices < ActiveRecord::Migration[6.0]
  def change
    create_table :prices do |t|
      t.decimal :avg_price

      t.timestamps
    end
  end
end
