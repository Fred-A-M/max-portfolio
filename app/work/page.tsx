import { redirect } from 'next/navigation'
import { projects } from '../consts'

export default function WorkIndex() {
  redirect(`work/${projects[0].link}`)
}