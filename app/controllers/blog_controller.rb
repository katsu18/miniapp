class BlogController < ApplicationController
    def index
        @kizi = Blog.includes(:user).page(params[:page]).per(5).order("id DESC")
    end

    def new
      @blog = Blog.new
    end

    def destroy
      blog = Blog.find(params[:id])
      if blog.user_id == current_user.id
        blog.destroy
        redirect_to root_path
      end
    end

    def create
      if request.post? then
        Blog.create(blog_params)
      end
        redirect_to root_path
    end

    def update
      blog = Blog.find(params[:id])
      if blog.user_id == current_user.id
        blog.update(blog_params2)
        redirect_to root_path
      end
    end

    private
  def blog_params
    params.require(:blog).permit(:blog,:title).merge(user_id: current_user.id)
  end

  def blog_params2
    params.permit(:blog,:title).merge(user_id: current_user.id)
  end
  

    def move_to_index
        redirect_to root_path unless user_signed_in?
    end


end
