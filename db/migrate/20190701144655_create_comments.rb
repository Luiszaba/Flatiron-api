class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text :comment
      t.integer :song_id
      t.string :user_id

      t.timestamps
    end
  end
end
