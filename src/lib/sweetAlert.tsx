// utils/sweetalert.js
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2'

export const basicAlert = (
  title: string,
  text: string,
  icon: SweetAlertOptions['icon'] = 'info',
): Promise<SweetAlertResult<any>> => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'OK',
  })
}
