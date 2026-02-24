import { redirect } from 'next/navigation'
import { projects } from '../consts'

export default function WorkIndex() {
  redirect(projects[0].link)
}