import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from './_private/dialog';
import { Icon } from './icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogClose asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-white data-[state=open]:text-muted-foreground"
              onClick={onClose}
            >
              <Icon name="X" className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="relative">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
