import { Mesh, Object3D, Scene } from "three";
import { Line2 as Line2Base } from "../../node_modules/@types/three/examples/jsm/lines/Line2";
import { Cursor, Events, InteractionEvents, Object3DExtPrototype, Tween } from "../index";

export class Line2 extends Line2Base implements Object3DExtPrototype {
    enabled: boolean;
    interceptByRaycaster: boolean;
    hitboxes: Mesh[];
    focusable: boolean;
    draggable: boolean;
    findDropTarget: boolean;
    scene: Scene;
    cursor: Cursor;
    cursorDrag: Cursor;
    cursorDrop: Cursor;
    needsRender: boolean;
    get hovered(): boolean;
    get focused(): boolean;
    get clicking(): boolean;
    get dragging(): boolean;
    get enabledState(): boolean;
    get firstFocusable(): Object3D;
    applyFocus(): void;
    applyBlur(): void;
    on<K extends keyof Events>(type: K | K[], listener: (args?: Events[K]) => void): (args?: Events[K]) => void;
    hasEvent<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): boolean;
    off<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): void;
    trigger<K extends keyof Events>(type: K, args?: Events[K]): void;
    triggerAncestor<K extends keyof InteractionEvents>(type: K, args?: InteractionEvents[K]): void;
    setManualDetectionMode(): void;
    detectChanges(recursive?: boolean): void;
    bindProperty<T extends keyof this>(property: T, getCallback: () => this[T], renderOnChange?: boolean): this;
    unbindProperty<T extends keyof this>(property: T): this;
    tween(): Tween<Line2>;
    override parent: Object3D;
    override children: Object3D[];
}
