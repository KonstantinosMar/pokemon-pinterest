import Header from "./components/Header/Header";

export const metadata = {
    title: 'Pokemon Pinterest •',
    description: 'Pokemon Pinterest',
}

export default function RootLayout({children}) {
    return (
        <>
            <html lang="en">
            <body>
                <Header/>
                {children}
            </body>
            </html>
        </>

    )
}
