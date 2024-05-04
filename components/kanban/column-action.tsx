"use client";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import * as React from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useTaskStore } from "@/lib/store";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Input } from "../ui/input";

export function ColumnActions({
  title,
  id,
}: {
  title: string;
  id: UniqueIdentifier;
}) {
  const [open, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState(title);
  const updateCol = useTaskStore((state) => state.updateCol);
  const removeCol = useTaskStore((state) => state.removeCol);
  const [editDisable, setIsEditDisable] = React.useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditDisable(!editDisable);
          updateCol(id, name);
          toast({
            title: "عنوان عوض شد",
            variant: "default",
            description: `${title} تغییر کرد به ${name}`,
          });
        }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-base !mt-0 mr-auto disabled:opacity-100 disabled:cursor-pointer disabled:border-none"
          disabled={editDisable}
          ref={inputRef}
        />
      </form>
      <DropdownMenu dir="rtl">
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="ml-1">
            <span className="sr-only">Actions</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onSelect={() => {
              setIsEditDisable(!editDisable);
              setTimeout(() => {
                inputRef.current && inputRef.current?.focus();
              }, 500);
            }}
          >
            تغییر عنوان
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog(true)}
            className="text-red-600"
          >
            حذف ستون
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>آیا از حذف این ستون مطمئنید؟</AlertDialogTitle>
            <AlertDialogDescription>
              توجه: تمام تسک‌های مربوط به این ستون هم حذف خواهد شد.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>انصراف</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={() => {
                // yes, you have to set a timeout
                setTimeout(() => (document.body.style.pointerEvents = ""), 100);

                setShowDeleteDialog(false);
                removeCol(id);
                toast({
                  description: "این ستون حذف شد.",
                });
              }}
            >
              حذف
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
