import { Metadata } from "next"
import "./globa.css"

export const metadata: Metadata = {
    title: "Sayılan Lojistik",
    description:"Sayılan lojistik firması iletişim bilgileri ve firma vizyon & misyonu"
  }

export default function layout({children}:any) {
  return (
    <html lang="en">
    <body>
        <div className="main-container">
            {children}
        </div>
    </body>
    </html>
    
  )
}
