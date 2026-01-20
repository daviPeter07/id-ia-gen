'use client'

import { toast as sonnerToast } from 'sonner'

function useToast() {
  return {
    toast: sonnerToast,
    dismiss: (toastId?: number) => {
      if (toastId === undefined) {
        sonnerToast.dismiss()
      } else {
        sonnerToast.dismiss(toastId)
      }
    },
  }
}

const toast = sonnerToast

export { useToast, toast }
