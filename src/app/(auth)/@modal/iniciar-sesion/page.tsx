import { Modal } from "@/components/ui/auth-modal";

export default function LoginModal() {
  return (
    <Modal>
      <div className="bg-red w-10 h-10 z-50">
        <p>This is a modal</p>
      </div>
    </Modal>
  );
}
