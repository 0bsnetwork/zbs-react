
Pod::Spec.new do |s|
  s.name         = "RN0bsnetwork"
  s.version      = "1.0.0"
  s.summary      = "RN0bsnetwork"
  s.description  = <<-DESC
                  RN0bsnetwork
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RN0bsnetwork.git", :tag => "master" }
  s.source_files  = "RN0bsnetwork/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  