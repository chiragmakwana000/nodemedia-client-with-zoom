require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name           = 'nodemedia-client-with-zoom'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.author         = package['author']
  s.homepage       = 'https://github.com/chiragmakwana000/nodemedia-client-with-zoom'
  s.source       = { :git => "https://github.com/chiragmakwana000/nodemedia-client-with-zoom.git", :tag => "master" }

  s.ios.deployment_target = "8.0"

  s.subspec "RCTNodeMediaClient" do |ss|
    ss.source_files  = "ios/RCTNodeMediaClient/*.{h,m}"
    s.static_framework = true
  end

  s.dependency "React"

  s.dependency "NodeMediaClient", '2.8.2'

  s.default_subspec = "RCTNodeMediaClient"
end