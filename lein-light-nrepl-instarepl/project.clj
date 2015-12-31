(defproject lein-light-nrepl-instarepl "0.3.1"
  :description "nrepl client for Clojure instarepl"
  :url "https://github.com/LightTable/ClojureInstarepl/tree/master/lein-light-nrepl-instarepl"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [lein-light-nrepl "0.3.0"]]
  :jvm-opts ["-Xmx1g"])
