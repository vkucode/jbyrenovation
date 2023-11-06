import type {PropsWithChildren} from 'react'

export default function DashboardLayout({children}:PropsWithChildren<unknown>){
    return <div>
        <h1>Dashboard H1</h1>
        {children}
        </div>
}