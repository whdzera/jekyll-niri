# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "niri"
  spec.version       = "1.3"
  spec.authors       = ["rokhimin Wahid"]
  spec.email         = ["rokhim.whd@gmail.com"]

  spec.summary       = "jekyll Theme Blog using Bulma"
  spec.homepage      = "https://github.com/rokhimin/Niri"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
end
