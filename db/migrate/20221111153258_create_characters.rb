class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.decimal :x_location
      t.decimal :y_location
      t.string :picture
      t.references :image, null: false, foreign_key: true

      t.timestamps
    end
  end
end
