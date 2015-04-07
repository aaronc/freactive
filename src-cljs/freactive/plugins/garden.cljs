(ns freactive.plugins.garden
  (:require
   [garden.types]
   [garden.compiler]
   [freactive.dom :as dom]))


(extend-protocol dom/IDOMAttrValue
  garden.types.CSSUnit
  (-get-attr-value [this]
    (garden.compiler/render-css this)))
