import "../styles/global.css";
import type { Metadata } from 'next'
import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
    title: 'Theatre App',
    description: 'Some description should be here',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    )
}