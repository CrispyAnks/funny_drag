import type { FC } from 'react'
import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDrop, useDrag } from 'react-dnd'
import { MessageCircle } from 'lucide-react';

interface FloatingButtonDnDProps {
  onClick: () => void;
}

export interface DragItem {
  type: string
  top: number
  left: number
}

export const ItemTypes = {
  BOX: 'box',
}

export const FloatingButtonDnD: FC<FloatingButtonDnDProps> = ({ onClick }) => {

  const [position, setPosition] = useState<{
      top: number
      left: number
    }>({ top: 20, left: 80 })

  const moveButton = useCallback(
    (left: number, top: number) => {
      setPosition(
        update(position, {
            $merge: { left, top },
         }),
      )
    },
    [position, setPosition],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveButton(left, top)
        return undefined
      },
    }),
    [moveButton],
  )

  const [{ isDragging }, drag] = useDrag(
      () => ({
        type: ItemTypes.BOX,
        item: position,
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [position],
  )

  return (
    <div ref={drop} style={{width: '100vw', height: '100vh', position: 'absolute', zIndex: 10,}}>
         { (isDragging)? (<div ref={drag} />) :
   
    <button
      className="box absolute bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors cursor-move"
      ref={drag}
      style={{ left: position.left, top: position.top }}
      data-testid="box"
      onClick={onClick}
    >
        <MessageCircle size={24} />
    </button>}
    </div>
  )
}

