class Todo < ApplicationRecord
    validates :action, presence: true
end
