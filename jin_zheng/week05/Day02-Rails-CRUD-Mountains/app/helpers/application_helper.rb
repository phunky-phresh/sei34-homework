module ApplicationHelper
    def get_volcanoes_by_continent(continent)
        @volcanoes_c = Volcano.where continent: continent
        @volcanoes_c if @volcanoes_c.present?
    end
end
