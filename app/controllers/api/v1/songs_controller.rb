module Api::V1
    class SongsController < ApplicationController

    def index
        @songs = Song.all
        render json: @songs
    end

    def create
        @song = Song.new(song_params)
        if @song.save
            render json: @song
        else 
            render json: {errors: { message: "Please try again.  Either the developer messed up, or you did something wrong"}}
        end
    end

    def destroy
        @song = Song.find_by(params[:id])
        @song.destroy
    end

    private 

    def song_params
        params.require(:song).permit(:id, :title, :genre, :artist, :length)
    end
end
end