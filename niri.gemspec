# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "niri"
  spec.version       = "3.0"
  spec.authors       = ["rokhimin Wahid"]
  spec.email         = ["rokhim.whd@gmail.com"]

  spec.summary       = "jekyll Theme Blog using Bulma css"
  spec.description   = "Niri is a clean and modern Jekyll theme built with Bulma. It provides a lightweight, responsive layout for personal blogs and portfolio websites."
  spec.homepage      = "https://github.com/rokhimin/jekyll-niri"
  spec.license       = "MIT"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/rokhimin/jekyll-niri"
  spec.metadata["changelog_uri"] = "https://github.com/rokhimin/jekyll-niri/blob/main/CHANGELOG.md"
  spec.metadata["documentation_uri"] = "https://github.com/rokhimin/jekyll-niri/wiki"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.required_ruby_version = ">= 2.7"
  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
