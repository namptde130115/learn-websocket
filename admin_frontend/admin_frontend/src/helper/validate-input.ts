export function disabledAutosuggestion(event: React.FocusEvent<HTMLElement>) {
  return event.target.setAttribute("autocomplete", "whatever");
}

export function formatcurrency(data: any) {
  if (!data) {
    return "";
  }
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data);
}

