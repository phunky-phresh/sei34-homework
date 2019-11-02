class CompaniesController < ApplicationController
    def index
        @companies = Company.all
    end

    def show
        @company = Company.find params[:id]
    end

    def edit
        @company = Company.find params[:id]
    end

    def update
        company = Company.find params[:id]
        company.update company_params
        redirect_to company
    end

    def new
        @company = Company.new
    end

    def create
        Company.create company_params
        redirect_to companies_path
    end

    def destroy
        company = Company.find params[:id]
        company.destroy
        redirect_to companies_path
    end

    private
    def company_params
        params.require(:company).permit(:name, :founder, :founded, :headquarter, :website, :image)
    end
end
