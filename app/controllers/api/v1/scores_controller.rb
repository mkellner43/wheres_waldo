class Api::V1::ScoresController < ApplicationController
  before_action :set_score, only: %i[ show update destroy ]

  # GET /scores
  def index
    @scores = Score.all
    @ordered_scores = @scores.where(image_id: score_params[:image_id]).order(:time).limit(10)

    render json: @ordered_scores
  end

  # GET /scores/1
  def show
    render json: @score
  end

  # POST /scores
  def create
    @score = Score.new(score_params)
    @imageScores = Score.where(image_id: score_params[:image_id]).order(:time).limit(10)
    if @score.save
      render json: @imageScores, status: :created
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /scores/1
  def update
    if @score.update(score_params)
      render json: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # DELETE /scores/1
  def destroy
    @score.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score
      @score = Score.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def score_params
      params.require(:score).permit(:name, :time, :image_id)
    end
end
