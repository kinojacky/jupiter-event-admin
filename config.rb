# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
# activate :directory_indexes
activate :sprockets
# activate :directory_indexes
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

helpers do
  def nav_active(page)
    # current_page.url.include?(page) ? 'active' : ''
    current_page.path.include?(page) ? 'active' : ''
  end

  def nav_show(page)
    current_page.path.include?(page) ? 'show' : ''
  end

  def nav_collapsed(page)
    current_page.path.include?(page) ? '' : 'collapsed'
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

set :js_dir, 'assets/js'
set :css_dir, 'assets/css'
set :images_dir, 'assets/images'

configure :build do
    activate :relative_assets
    set :js_dir, 'assets/js'
    set :css_dir, 'assets/css'
    set :images_dir, 'assets/images'
#   activate :minify_css
#   activate :minify_javascript
end

# Global site settings (not shown here)
set :site_url, ""
