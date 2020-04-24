## aframe-geometry-merger-component

[![Version](http://img.shields.io/npm/v/aframe-geometry-merger-component.svg?style=flat-square)](https://npmjs.org/package/aframe-geometry-merger-component)
[![License](http://img.shields.io/npm/l/aframe-geometry-merger-component.svg?style=flat-square)](https://npmjs.org/package/aframe-geometry-merger-component)

An A-Frame component to merge geometries to reduce draw calls.

For [A-Frame](https://aframe.io).

This component is attached to a parent and will merge any meshes found in the
descendants. A-Frame transforms placed on entities will be preserved. The
merged geometry will be set on the parent entity's mesh
(`el.getObject3D('mesh')`).

Useful if using vertex or face coloring as individual geometries' colors can
still be manipulated individually since this component keeps a `faceIndex` and
`vertexIndex`.

[Source code for interactive merged geometries](https://github.com/supermedium/superframe/blob/master/components/geometry-merger/examples/basic/index.html#L10)

### API

For either `geometry-merger` or `buffer-geometry-merger` components:

| Property         | Description                                                                                                                                                                                                                                               | Default Value |
| --------         | -----------                                                                                                                                                                                                                                               | ------------- |
| preserveOriginal | Whether to remove the now-merged child goemetry or keep in scene graph. It can be useful to keep the original child entities' geometries and set their `material="visible: false"` so that we can still interact with them with colliders and raycasters. | false         |

#### Members

| Member      | Description                                                                                                                                                 |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| faceIndex   | Map of child A-Frame entitites Object3D UUIDs to array of face indices indiciating which faces in the merged geometries belong to the former child geometry |
| vertexIndex   | Map of child A-Frame entitites Object3D UUIDs to array of vertex indices indiciating which vertices in the merged geometries belong to the former child geometry |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.9.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-geometry-merger-component/dist/aframe-geometry-merger-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity geometry-merger="preserveOriginal: false" material="color: #AAA">
      <a-entity geometry="primitive: box; buffer: false" position="-1 0.5 -2"></a-entity>
      <a-entity geometry="primitive: sphere; buffer: false" position="0 0.5 -2"></a-entity>
      <a-entity geometry="primitive: cylinder; buffer: false" position="1 0.5 -2" scale="0.5 0.5 05"></a-entity>
    </a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-geometry-merger-component
```

Then require and use.

```js
require('aframe');
require('aframe-geometry-merger-component');
```
