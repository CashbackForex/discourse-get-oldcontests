class ContestsStore
    class << self
        def get_notes
            PluginStore.get('contests', 'contests') || {}
        end
    end
end