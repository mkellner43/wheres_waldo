class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.string :name
      t.integer :time
      t.references :image, null: false, foreign_key: true

      t.timestamps
    end
  end
end
