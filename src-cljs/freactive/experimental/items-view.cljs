(ns freactive.experimental.items-view
  (:require
   [freactive.dom :as dom]
   [clojure.data.avl :as avl]))

(defn- create-cursor [k v])

(defn- get-node [nodes k v view-fn]
  (loop [node (get nodes k)]
    (if node
      (if (instance? dom/ReactiveElement node)
        (recur (.-cur-element node))
        node)
      (view-fn (create-cursor k v)))))

(deftype ItemsView [container items view-fn
                    ^:mutable projection nodes
                    lower-index upper-index
                    range-test
                    filter
                    disposed]
  Object
  (withinBounds [this idx k v]
    (if range-test
      (range-test idx k v)
      (and (or (not lower-index) (>= idx lower-index))
           (or (not upper-index) (<= idx upper-index)))))

  (removeItemNode [this k]
    (when-let [node (get nodes k)]
      (dom/remove! node)))

  (insertAt [this node idx])

  (moveOrCreateAt [this k v idx])

  (updateItem [this k v]
    ;; update cursor
    (if (and filter (not (filter v)))
      (.removeItemNode this k)
      (let [projection (assoc projection k v)
            new-idx (avl/rank-of projection k)]
        (if (not (.withinBounds new-idx k v))
          (.removeItemNode this k)
          (.moveOrCreateAt this k v new-idx)))))

  (disposed-callback [this]))

(defn- sort-items [items-seq sort-by]
  (let [projection
        (into
         (if sort-by (avl/sorted-map-by sort-by) (avl/sorted-map))
         items-seq)]))

(defn items-view [{:keys [items container view-fn
                          header footer
                          sort-by sort-order
                          filter 
                          lower-index upper-index
                          range-test
                          placeholder placeholder-idx]}]
  (let [container (dom/build container)
        start-offset (or (when header (count header)) 0)
        end-offset (or (when footer (count footer)) nil)
        projection nil
        nodes {}]
    (doseq [h header] (dom/append-child! container h))
    (doseq [f footer] (dom/append-child! container f))))



