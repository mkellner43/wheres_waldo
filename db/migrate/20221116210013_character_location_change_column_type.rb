class CharacterLocationChangeColumnType < ActiveRecord::Migration[7.0]
  def change
    change_column(:characters, :x_location, :decimal)
    change_column(:characters, :y_location, :decimal)
  end
end
