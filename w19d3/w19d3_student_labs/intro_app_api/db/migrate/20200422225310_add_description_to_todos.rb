class AddDescriptionToTodos < ActiveRecord::Migration[6.0]
  def change
    #Method    Table   Column        Datatype
    add_column :todos, :description, :string
  end
end
