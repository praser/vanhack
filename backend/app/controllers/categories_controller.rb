class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]
  before_action :authenticate

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: Category.all, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.permit(:name, :description).merge(user_id: @current_user.id)
    end
end
