class CommentsController < ApplicationController

    def index 
        @comments = Comments.all
        render json: @comments
    end

    def create 
        @comment = Comment.create(comment_params)
        if @comment.save
            render json: @comment
        else 
            render json: {errors: { message: "Please try again.  Either the developer messed up, or you did something wrong"}}
        end
    end

    def destroy
        @comment = Comment.find_by(params[:id])
        @comment.destroy
    end
    

    private 

    def comment_params
        params.require(:comment).permit(:id, :comment, :user_id, :song_id)
    end   
end
