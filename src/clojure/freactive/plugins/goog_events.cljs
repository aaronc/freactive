(ns freactive.plugins.goog-events
  (:require [goog.events :as events]
    [freactive.dom :as dom]))

(defn use-goog-events! []
  (set! dom/listen! events/listen)
  (set! dom/unlisten! events/unlisten))
