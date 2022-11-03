import {DrawingInfo, IPaint, IPath} from '@shopify/react-native-skia';
import create, {State} from 'zustand';
import utils from '../drawing/utils';

export type CurrentPath = {
  path: IPath;
  paint: IPaint;
  color?: string;
};

interface DrawingStore extends State {
   
  completedPaths: CurrentPath[];
   
  setCompletedPaths: (completedPaths: CurrentPath[]) => void;
  
  stroke: IPaint;
  
  strokeWidth: number;
  
  color: string;
  setStrokeWidth: (strokeWidth: number) => void;
  setColor: (color: string) => void;
  setStroke: (stroke: IPaint) => void;
  canvasInfo: Partial<DrawingInfo> | null;
  setCanvasInfo: (canvasInfo: Partial<DrawingInfo>) => void;
}

const useDrawingStore = create<DrawingStore>((set, get) => ({
  completedPaths: [],
  setCompletedPaths: completedPaths => {
    set({completedPaths});
  },
  strokeWidth: 2,
  color: 'black',
  stroke: utils.getPaint(2, 'black'),
  setStrokeWidth: strokeWidth => {
    set({strokeWidth});
  },
  setColor: color => {
    set({color});
  },
  setStroke: stroke => {
    set({stroke});
  },
  canvasInfo: null,
  setCanvasInfo: canvasInfo => {
    set({canvasInfo});
  },
}));

export default useDrawingStore;
