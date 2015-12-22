(defproject lein-light-nrepl-instarepl "0.3.0"
  :description "nrepl client for Light Table clj and cljs eval."
  :url "https://github.com/LightTable/ClojureInstarepl/tree/master/lein-light-nrepl-instarepl"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [lein-light-nrepl "0.2.0"]
                 #_[org.clojure/clojurescript "0.0-3308"
                   :exclusions [org.apache.ant/ant]]]
  :jvm-opts ["-Xmx1g"])
