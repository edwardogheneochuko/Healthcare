declare module "three/examples/jsm/loaders/FBXLoader" {
    import { Loader, LoadingManager, Object3D } from "three";
  
    export class FBXLoader extends Loader {
      constructor(manager?: LoadingManager);
      load(
        url: string,
        onLoad: (object: Object3D) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
      parse(FBXBuffer: ArrayBuffer | string, path: string): Object3D;
    }
  }
  