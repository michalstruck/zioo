"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function InterceptedModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  return (
    <Dialog open={true} onOpenChange={(val) => { if (!val) router.back() }}>
      <DialogContent className="max-w-[1300px] sm:max-w-[1300px] md:max-w-[1300px] w-[95vw] h-[90vh] overflow-y-auto p-0 rounded-3xl gap-0 border-none bg-background shadow-2xl">
        <VisuallyHidden>
            <DialogTitle>Szczegóły Produktu</DialogTitle>
        </VisuallyHidden>
        <div className="flex w-full h-full">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
