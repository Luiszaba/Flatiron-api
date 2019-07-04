module Api::V1
    class SongsController < ApplicationController

    def index
        @songs = Song.all
        render json: @songs
    end

    def create
        byebug

        @song = Song.new(song_params)
        if @song.save
            render json: @song
        else 
            render json: {errors: { message: "Please try again.  Either the developer messed up, or you did something wrong"}}
        end
    end

    def destroy
        @song.destroy
    end

    private

    def song_list
        @song = Song.find_by_id(params[:id])
      end

    def song_params
        params.require(:song).permit(:id, :title, :genre, :artist, :legnth)
    end
end
end