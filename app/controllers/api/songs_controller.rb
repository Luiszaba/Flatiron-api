class Api::SongsController < ApplicationController

    def index
        @song = Song.all
        render json: @songs
    end
end
