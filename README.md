
![](https://i.ibb.co.com/sdVSmQ5x/niri-logo.png)
# Niri
Theme for jekyll using Bulma.

Live Demo : https://rokhimin.github.io/jekyll-niri

## Installation Jekyll

    $ gem install jekyll


create first app

    $ jekyll new yournameapp


## Installation Theme 

Installation theme Niri to your jekyll app

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "niri"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: niri
```

And then execute:

    $ bundle


Run jekyll:

    $ bundle exec jekyll s

## Misc

Create file 'projects.markdown' to use page Projects.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/niri. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `niri.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
