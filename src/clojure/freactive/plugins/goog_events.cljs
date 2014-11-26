(ns freactive.plugins.goog-events
  (:require [goog.events :as events]
    [freactive.dom :as dom]))

(defn plug-in! []
  (set! dom/*listen!* events/listen)
  (set! dom/*unlisten!* events/unlisten))
