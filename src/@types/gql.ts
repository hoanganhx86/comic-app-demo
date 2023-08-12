export interface Root<T> {
  edges: Edge<T>[];
}

export interface Edge<T> {
  node: T;
}
