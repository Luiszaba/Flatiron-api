class UsersController < ApplicationController
    before_action: authorize

    def index 
        @users = User.all
        render :json @users
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render :json @user
        else 
            render :json {errors: { message: "Please try again.  Either the developer messed up, or you did something wrong"}}
        end
    end

    def destroy
        @user = User.find_by(params[:id])
        @user.destroy
    end

    private

    def user_list
        @user = User.find_by(params[:id])
    end

    def user_params
        params.require(:email).permit(:id, :first_name, :last_name, :email, :password)
        end
    end
end
