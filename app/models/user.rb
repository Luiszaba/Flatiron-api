class User < ApplicationRecord
    has_many :comments
    has_many :songs
    validates_presence_of email, :password
    has_secure_password
end
