class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :action, null: :false
      t.boolean :done, null: :false

      t.timestamps
    end
  end
end
