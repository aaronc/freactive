(ns freactive.plugins.goog-events
  (:require [goog.events :as events]
    [freactive.dom :as dom]))

(defn use-goog-events!
  "Replaces freactive.dom's native DOM event handling with goog.events."
  []
  (set! dom/listen! events/listen)
  (set! dom/unlisten! events/unlisten))
