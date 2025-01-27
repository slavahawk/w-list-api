import { ToastService } from "primevue/toastservice";

export class ServiceError extends Error {
  constructor(
    message: string,
    public errorCode?: number,
    private isToast?: boolean,
  ) {
    super(message);
    this.name = "ServiceError";

    // Если ToastService был передан, показываем уведомление об ошибке
    if (this.isToast) {
      this.showToast();
    }
  }

  private showToast() {
    ToastService.add({
      severity: "error",
      summary: this.message,
      detail: this.errorCode ? `Код: ${this.errorCode}` : undefined,
      life: 3000,
    });
  }
}
